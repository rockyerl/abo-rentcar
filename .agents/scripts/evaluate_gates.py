#!/usr/bin/env python3
"""Fail-closed technical gate assessor; never creates human sign-off."""
import argparse, json, sys
from datetime import datetime, timezone
from pathlib import Path
from validate_artifact import validate
ROOT=Path(__file__).resolve().parents[1]

def evaluate(profile, docs):
    policy=json.loads((ROOT/'config/quality-gates.json').read_text())
    if profile not in policy['profiles']:raise ValueError('Unknown profile')
    if not docs:raise ValueError('At least one report is required')
    projects={d['scope']['project'] for d in docs}
    if len(projects)>1:raise ValueError('Cannot combine audit reports from different projects')
    required=policy['profiles'][profile]['required_gates']
    severities=set(policy['profiles'][profile]['blocking_severities'])
    hits={key:[] for key in required}; blockers=[]; limitations=[]
    for doc in docs:
        errors=validate('audit-report',doc)
        if errors:raise ValueError('Invalid input report: '+ '; '.join(errors))
        limitations += doc['limitations']
        for f in doc['findings']:
            if f['severity'] in severities and f['status'] in ('confirmed','suspected'):
                blockers.append(f['id'])
            if f['status']=='risk-accepted':
                exp=f.get('acceptance',{}).get('expires_at')
                if not exp or datetime.fromisoformat(exp.replace('Z','+00:00'))<=datetime.now(timezone.utc):blockers.append(f['id']+' (acceptance expired)')
        for g in doc['gate_results']:
            if g['gate_id'] in hits:hits[g['gate_id']].append(g)
    gates=[]
    for key in required:
        entries=hits[key]
        if not entries:
            status='not-tested'; reason='No audit report provides this mandatory gate.'; evid=[]
        elif any(g['status']=='fail' for g in entries):
            status='fail'; reason='At least one report failed this gate.'; evid=sorted({e for g in entries for e in g['evidence_ids']})
        elif any(g['status']!='pass' for g in entries):
            status='not-tested'; reason='One or more assessments unverified, waived or not applicable: human assessment required.'; evid=sorted({e for g in entries for e in g['evidence_ids']})
        else:
            status='pass';reason='All supplied reports claiming this gate report pass with evidence IDs; verify provenance independently.';evid=sorted({e for g in entries for e in g['evidence_ids']})
        gates.append({'id':key,'status':status,'evidence_ids':evid,'reason':reason})
    hard_block=bool(blockers) or any(g['status'] in ('not-tested','fail') for g in gates)
    overall='BLOCK' if hard_block else 'REVIEW'  # Never self-approve: human sign-off required
    if not hard_block:limitations.append('All provided technical gates passed; awaiting independent evidence review and human release sign-off.')
    result={'schema_version':'1.0.0','profile':profile,'project':docs[0]['scope']['project'],'reviewed_at':datetime.now(timezone.utc).isoformat(), 'overall':overall,'gates':gates,'blocking_findings':sorted(set(blockers)),'limitations':limitations,'approver':None}
    return result

def main():
    ap=argparse.ArgumentParser();ap.add_argument('--profile',required=True);ap.add_argument('--reports',nargs='+',required=True,type=Path);ap.add_argument('--out',type=Path,required=True);a=ap.parse_args()
    try:docs=[json.loads(p.read_text(encoding='utf-8')) for p in a.reports];result=evaluate(a.profile,docs)
    except (ValueError,KeyError,OSError) as exc:print('ERROR:',exc);sys.exit(2)
    a.out.parent.mkdir(parents=True,exist_ok=True);a.out.write_text(json.dumps(result,indent=2,ensure_ascii=False)+'\n')
    print(f'{result["overall"]}: wrote {a.out} | {len(result["blocking_findings"])} blocking findings | human approval required')
    # CI blocks on BLOCK; REVIEW also non-green (human sign-off pending).
    sys.exit(1 if result['overall']=='BLOCK' else 2 if result['overall']=='REVIEW' else 0)
if __name__=='__main__':main()
