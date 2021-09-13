import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import GameItem from '../GameItem/GameItem';
import { getRecentMatches } from '../../../services';
import { webCenter } from '../../../styles/theme';

type Props = {
  user: Object;
  puuid: string;
}

const count = 20;

const SummonerBody: React.FC<Props> = ({ user, puuid }) => {
  const [matches, setMatches] = useState([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    fetchRecentMatches(puuid);
  }, [puuid])

  const fetchRecentMatches = async (puuid) => {
    const result = await getRecentMatches(puuid, start, count);
    setMatches(result?.data);
  }

  return (
    <SummonerBodyStyled>
      <div className="body-main">
        <aside></aside>
        <ul>
          {matches && matches.map(id => <GameItem puuid={puuid} gameId={id} />)}
        </ul>
      </div>
    </SummonerBodyStyled>
  )
}

export default SummonerBody;

const SummonerBodyStyled = styled.div`
  padding-top: 70px;

  .body-main {
    ${webCenter};
    height: 100%;
    display: grid;
    grid-template-columns: 300px 690px;
    gap: 10px;

    & > aside {
      border: 1px solid green;
      height: 1500px;
    }
  }
`;
