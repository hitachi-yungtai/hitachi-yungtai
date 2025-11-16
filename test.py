import json
import csv

reader = csv.reader('error_code.csv')
result = {}
with open('error_code.csv', encoding='utf-8') as csvfile:
    rows = csv.reader(csvfile)
    for row in rows:
        model = row[2]
        if model not in result.keys():
            result[row[2]] = {}
            result[row[2]][row[0]] = row[1]
        else:
            result[row[2]][row[0]] = row[1]


with open("error_codes.json", "w", encoding="utf-8") as f:
    json.dump(result, f, ensure_ascii=False, indent=2)

print("轉換完成，已生成 fault_codes.json")
