import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getRecentMatches } from '../../../services';
import { webCenter  } from '../../../styles/theme';

type Props = {
  user: Object;
  puuid: string;
}

const count = 20;

const SummonerBody = ({ user, puuid }) => {
  const [matches, setMatches] = useState([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    fetchRecentMatches(puuid);
  }, [puuid])

  const fetchRecentMatches = async (puuid) => {
    const res = await getRecentMatches(puuid, start, count);
    console.log(res);
  }


  return (
    <BodyContainer>
      <div className="body-main">
        <aside></aside>
        <section></section>
      </div>
    </BodyContainer>
  )
}

export default SummonerBody;

const BodyContainer = styled.div`
  padding-top: 70px;
  height: 800px;
  border: 1px solid blue;

  .body-main {
    ${webCenter};
    height: 100%;
    display: grid;
    grid-template-columns: 300px 690px;
    gap: 10px;

    & > * {
      border: 1px solid green;
      height: 100%;
    }
  }
`;
