import axios from 'axios';
import { API, KEY } from '../constants';

const makeQuery = (query?, initial='TH') => {
  let str = `?api_key=${KEY[initial]}`
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