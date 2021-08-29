import axios from 'axios';
import { API } from '../constants';

export const getSummonerInfo = async (name) => {
  const res = await axios.get(`${API}/summoner/v4/summoners/by-name/${name}`)
  await console.log(res)
}