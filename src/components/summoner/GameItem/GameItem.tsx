import React, { useState, useEffect }  from 'react'
import styled from 'styled-components';
import { getMatch } from '../../../services';
import GameChamp from './GameChamp';
import GameStats from './GameStats';
import GameScore from './GameScore';

type Props = {
  puuid: string;
  gameId: string;
}

const GameItem: React.FC<Props> = ({ puuid, gameId }) => {
  const [game, setGame] = useState({});
  const myInfo = game?.participants?.find(p => p.puuid === puuid)
  const winLose = myInfo?.win ? 'win' : 'lose';

  useEffect(() => {
    fetchMatchRecord();
  }, [gameId])
  
  const fetchMatchRecord = async () => {
    const res = await getMatch(gameId);
    setGame(res?.data.info);
  }

  return (
    <GameItemStyled winLose={winLose}>
      <GameStats game={game} winLose={winLose} />
      <GameChamp game={game} myInfo={myInfo} />
      <GameScore myInfo={myInfo} winLose={winLose} />
    </GameItemStyled>
  )
}

const GameItemStyled = styled.li`
  display: flex;
  height: 97px;
  margin: 0 0 8px;
  border: 1px solid;
  border-color: ${({ theme, winLose }) => theme[winLose].border };
  background-color: ${({ theme, winLose }) => theme[winLose].background };
  color: ${({ theme }) => theme.gray[3] };
  font-size: 11px;

  & > article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    border: 1px solid green;
  }
`;

export default GameItem;
