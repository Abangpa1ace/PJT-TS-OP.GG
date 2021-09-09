import React from 'react'
import styled from 'styled-components'
import { getChampImgUrl, getSpellImgUrl } from '../../../utils';

type Props = {
  game?: GameInfo;
  myInfo: ParticipantInfo;
}

const GameChamp: React.FC<Props> = ({ game, myInfo }) => {

  return (
    <ChampStyled>
      <div className="images">
        <img src={getChampImgUrl(myInfo?.championName)} className="profile" alt="champ-profile" />
        <img src={getSpellImgUrl('SummonerBoost')} className="spell" />
        <img src={'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png'} className="rune main" />
        <img src={getSpellImgUrl('SummonerFlash')} className="spell" />
        <img src={'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png'} className="rune sub" />
      </div>
      <p>{myInfo?.championName}</p>
    </ChampStyled>
  )
}

const ChampStyled = styled.article`
  width: 15%;

  .images {
    height: 46px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(2,1fr);
    gap: 5px 4px;

    .profile {
      width: 46px;
      height: 46px;
      border-radius: 23px;
      grid-column: 1/3;
      grid-row: 1/3;
    }

    .spell, .rune {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }

    .rune.main {
      background-color: black;
      border-radius: 50%;
    }
  }

  p {
    margin: 8px 0 0;
    text-align: center;
    font-weight: 500;
  }
`;

export default GameChamp
