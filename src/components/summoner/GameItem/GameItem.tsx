import React, { useState, useEffect }  from 'react'
import styled from 'styled-components';
import { getMatch } from '../../../services';
import GameStats from './GameStats';

type Props = {
  puuid: string;
  gameId: string;
}

const GameItem: React.FC<Props> = ({ puuid, gameId }) => {
  const [game, setGame] = useState({});
  const winLose = game?.participants?.find(p => p.puuid === puuid)?.win ? 'win' : 'lose';

  useEffect(() => {
    fetchMatchRecord();
  }, [gameId])
  
  const fetchMatchRecord = async () => {
    const res = await getMatch(gameId);
    console.log(res?.data.info);
    setGame(res?.data.info);
  }

  return (
    <GameItemStyled winLose={winLose}>
      <GameStats game={game} winLose={winLose} />
    </GameItemStyled>
  )
}

const GameItemStyled = styled.li`
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
  }
`;

export default GameItem;
