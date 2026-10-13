#!/usr/bin/env python3
"""Refresh a public HK turnover snapshot and Hong Kong Observatory conditions."""
import json, re, urllib.parse, urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'data' / 'market-weather.json'
URL = 'https://push2.eastmoney.com/api/qt/clist/get?'
params = {
    'pn': '1', 'pz': '300', 'po': '1', 'np': '1', 'fltt': '2', 'invt': '2',
    'fid': 'f6', 'fs': 'm:128+t:3',
    'fields': 'f12,f14,f2,f3,f5,f6,f124'
}

def fetch_json(url):
    req = urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0 VinoGymTV/1.0','Referer':'https://quote.eastmoney.com/'})
    with urllib.request.urlopen(req, timeout=25) as res:
        return json.load(res)

raw = fetch_json(URL + urllib.parse.urlencode(params))
if raw.get('rc') != 0 or not isinstance(raw.get('data', {}).get('diff'), list):
    raise RuntimeError('Market feed did not return a valid result')
exclude = re.compile(r'基金|ETF|杠杆|反向|牛熊|認購|认购|認沽|认沽|涡轮|窩輪|债券|債券|票據|票据|期权|期權|优先股|優先股|房地产信托|REIT', re.I)
rows = []
for q in raw['data']['diff']:
    code, name = str(q.get('f12','')).zfill(5), str(q.get('f14','')).strip()
    price, change, turnover = q.get('f2'), q.get('f3'), q.get('f6')
    if not code.isdigit() or not name or exclude.search(name):
        continue
    if not all(isinstance(x,(int,float)) for x in (price,change,turnover)) or price <= 0 or turnover <= 0:
        continue
    rows.append({'code':code,'name':name,'price':price,'change':change,'turnover':turnover})
rows.sort(key=lambda x:x['turnover'], reverse=True)
if len(rows) < 50:
    raise RuntimeError('Market feed returned fewer than 50 eligible stocks')

weather = fetch_json('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en')
forecast = fetch_json('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=en')
temps = weather.get('temperature',{}).get('data',[])
if not temps:
    raise RuntimeError('Observatory response contains no temperature')
central = next((x for x in temps if x.get('place') == 'King\'s Park'), temps[0])
icon = (weather.get('icon') or [None])[0]
result = {
 'updatedAt': datetime.now(timezone.utc).isoformat(timespec='seconds'),
 'marketSource':'Eastmoney quote feed · sorted by reported turnover · quotes may be delayed',
 'stocks':rows[:50],
 'weather': {'temperatureC':central.get('value'),'place':central.get('place','Hong Kong'),'icon':icon,
   'description':(weather.get('iconUpdateTime') or ''), 'forecast':forecast.get('forecastDesc') or forecast.get('generalSituation') or 'Forecast unavailable',
   'updatedAt':weather.get('updateTime') or ''}
}
if not isinstance(result['weather']['temperatureC'],(int,float)):
    raise RuntimeError('Observatory temperature is invalid')
OUT.parent.mkdir(parents=True,exist_ok=True)
OUT.write_text(json.dumps(result,ensure_ascii=False,separators=(',',':'))+'\n',encoding='utf-8')
print('Updated 50 HK stocks and Hong Kong weather:',result['updatedAt'])
