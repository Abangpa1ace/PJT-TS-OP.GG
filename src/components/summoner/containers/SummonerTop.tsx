import React, { useEffect } from 'react'
import styled from 'styled-components';
import { webCenter } from '../../../styles/theme';

type Props = {
  user: Object;
}

const SummonerTop = ({ user }) => {
  const { name, profileIconId, summonerLevel } = user;

  return (
    <TopContainer>
      <h2>{name}</h2>
      <p>소환사 레벨: {summonerLevel}</p>
      <div>{`프로필 사진번호 ${profileIconId}` }</div>
    </TopContainer>
  )
}

export default SummonerTop;

const TopContainer = styled.header`
  ${webCenter};
  height: 160px;
  padding: 20px;
  border: 1px solid red;
`
