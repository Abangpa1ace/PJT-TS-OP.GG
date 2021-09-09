import { queueType, DDRAGON_VER } from '../constants';

// GameStats
export const setMinSec = (ms) => {
  const min = Math.floor(ms/60000);
  const sec = Math.floor((ms % 60000) / 1000);
  return `${min}분 ${sec}초`
}

export const setGameTypeKo = (queueId) => {
  if (queueId) {
    return queueType[queueId].ko;
  }
}

export const setTimePass = (value) => {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return '방금 전';
  if (betweenTime < 60) {
      return `${betweenTime}분 전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간 전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일 전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년 전`;
}

// GameChamp
export const getChampImgUrl = (name) => {
  return `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VER}/img/champion/${name}.png`
}

export const getSpellImgUrl = (spell) => {
  return `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VER}/img/spell/${spell}.png`
}