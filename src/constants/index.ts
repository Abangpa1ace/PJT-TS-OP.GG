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

export const queueType = {
  420: {
    type: 'soloRank',
    ko: '솔랭'
  },
  430: {
    type: 'normal',
    ko: '일반'
  },
  440: {
    type: 'teamRank',
    ko: '자유 5:5랭크'
  },
  450: {
    type: 'aram',
    ko: '무작위 총력전',
  }
}

export const API = {
  kr: 'https://kr.api.riotgames.com/lol',
  asia: 'https://asia.api.riotgames.com/lol'
}

export const HEADERS = {
  headers: {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://developer.riotgames.com",
    'Access-Control-Allow-Origin': "http://localhost:3001",
  }
}

export const KEY = 'RGAPI-1af3f1d0-4cc7-4345-8c95-d2b2d1a999ec'

