
import json
transcript_path = r"C:\Users\Rocky\.gemini\antigravity\brain\eedc406a-ca08-4f0d-845d-b3a4426bdfbf\.system_generated\logs\transcript_full.jsonl"
with open(transcript_path, 'r', encoding='utf-8') as f:
    for idx, line in enumerate(f):
        if idx in range(440, 473):
            obj = json.loads(line)
            tool_calls = obj.get("tool_calls", [])
            thinking = obj.get("thinking", "")
            if tool_calls:
                tc = tool_calls[0]
                print(f"Step {idx}: tool_call {tc.get('name')} {tc.get('args')}")
            if thinking:
                for line in thinking.split('\n'):
                    if any(k in line.lower() for k in ['zenix', 'reborn', 'raize', 'stargazer', 'xpander', 'br-v', 'brv', 'xl7', 'xenia', 'avanza', 'agya', 'brio', 'sigra', 'calya']):
                        print(f"  Thinking {idx}: {line}")
