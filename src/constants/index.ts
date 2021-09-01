export const ROUTES = [
  {
    name: 'main',
    path: '/',
    text: '#집에있자',
  },
  {
    name: 'summoner',
    path: '/summoner',
    text: '소환사 전적',
  },
  {
    name: 'statistics',
    path: '/champion/statistics',
    text: '챔피언 분석',
  },
]

export const API = 'https://kr.api.riotgames.com/lol';

export const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
  "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
  "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
  'Access-Control-Allow-Origin': "http//localhost:3001",
  "Origin": "https://developer.riotgames.com"
}

export const KEY = 'RGAPI-bf19d73c-72b6-49a0-8cea-04fb1720db54'

