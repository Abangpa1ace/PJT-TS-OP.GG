import React from 'react'
import styled from 'styled-components'
import { setMinSec, setGameTypeKo, setTimePass } from '../../../utils/index';

type Props = {
  game: GameInfo;
  winLose: boolean;
}

const GameStats = ({ game, winLose }) => {
  return (
    <StatsStyled winLose={winLose}>
      <p className="bold">{setGameTypeKo(game?.queueId)}</p>
      <p>{setTimePass(game?.gameCreation)}</p>
      <p className="win-lose bold">{winLose === 'win' ? '승리' : '패배'}</p>
      <p>{setMinSec(game?.gameDuration)}</p>
    </StatsStyled>
  )
}

const StatsStyled = styled.article`
  width: 10%;
  text-align: center;

  p {
    &.bold { font-weight: 600; }
    &.win-lose {
      position: relative;
      margin: 10px 0 0;
      color: ${({ theme, winLose }) => theme[winLose].font};
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: -5px;
        width: 27px;
        height: 1px;
        transform: translateX(-50%);
        background: ${({ theme }) => theme.gray[2]};
      }
    }
  }
`;

export default GameStats;
