import axios from 'axios';
import { API, HEADERS, KEY } from '../constants';

const makeQuery = (query?) => {
  let str = `?api_key=${KEY}`
  if (query) {
    Object.entries(query).forEach(([k,v]) => str += `&${k}=${v}`);
  }
  return str;
}

const api = {
  get: (url, query) => axios.get(API + url + makeQuery(query))
}

export const getSummonerInfo = (name) => {
  return api.get(`/summoner/v4/summoners/by-name/${name}`, {});
}

export const getRecentMatches = (puuid, start=0, count=20) => {
  const query = { start, count, };
  return api.get(`/match/v5/matches/by-puuid/${puuid}/ids`, query)
}

export const getMatch = (matchId) => {
  return api.get(`/match/v5/matches/${matchId}`, {})
} 