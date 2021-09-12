import React from 'react'
import styled from 'styled-components';

type Props = {
  myInfo: ParticipantInfo;
  winLose: boolean;
}

const GameScore: React.FC<Props> = ({ myInfo, winLose }) => {

  const kda = (myInfo?.kills + myInfo?.assists) / myInfo?.deaths;
  const isCarry = myInfo?.role === 'CARRY';

  return (
    <GameScoreStyled>
      <p className="kda-score">{myInfo?.kills} / <span>{myInfo?.deaths}</span> / {myInfo?.assists}</p>
      <p className="kda-mean">{kda === Infinity ? 'Perfect' : kda.toFixed(2)} 평점</p>
      <div className="tags">
        <TagKill>{'더블킬'}</TagKill>
        <TagCarry isShow={isCarry} winLose={winLose}>{winLose === 'win' ? 'MVP' : 'ACE'}</TagCarry>
      </div>
    </GameScoreStyled>
  )
}

const GameScoreStyled = styled.article`
  width: 18%;
  text-align: center;

  .kda-score {
    color: ${({ theme }) => theme.gray[3]};
    font-size: 15px;
    font-weight: bold;

    span {
      color: ${({ theme }) => theme.lose.font };
    }
  }

  .kda-mean {
    margin: 6px 0;
    color: ${({ theme }) => theme.gray[4]};
    font-size: 12px;
    font-weight: bold;
  }

  .tags {
    span {
      padding: 2px 5px;
      color: #fff;
      border-radius: 10px;
      font-size: 10px;

      &:not(&:nth-child(1)) {
        margin-left: 5px;
      }
    }
  }
`;

const TagKill= styled.span`
  display: ${({ isShow }) => isShow ? 'inline-block' : 'hidden'};
  background-color: #EE5A52;
`;

const TagCarry = styled.span`
  display: ${({ isShow }) => isShow ? 'inline-block' : 'hidden'};
  background-color: ${({ winLose }) => winLose === 'win' ? '#e19205' : '#8c51c5'};
`;

export default GameScore;
