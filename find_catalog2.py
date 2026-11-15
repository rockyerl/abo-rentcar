
import json
transcript_path = r"C:\Users\Rocky\.gemini\antigravity\brain\eedc406a-ca08-4f0d-845d-b3a4426bdfbf\.system_generated\logs\transcript_full.jsonl"
with open(transcript_path, 'r', encoding='utf-8') as f:
    for idx, line in enumerate(f):
        if idx in range(444, 473, 2):
            obj = json.loads(line)
            thinking = obj.get("thinking", "")
            print(f"=== STEP {idx} ===")
            print(thinking[:400])
