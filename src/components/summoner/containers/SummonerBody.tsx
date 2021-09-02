import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getRecentMatches, getMatch } from '../../../services';
import { webCenter  } from '../../../styles/theme';

type Props = {
  user: Object;
  puuid: string;
}

const count = 20;

const SummonerBody = ({ user, puuid }) => {
  const [matches, setMatches] = useState([]);
  const [matchList, setMatchList] = useState([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    fetchRecentMatches(puuid);
  }, [puuid])

  const fetchRecentMatches = async (puuid) => {
    const result = await getRecentMatches(puuid, start, count);
    setMatches(result?.data);
    fetchMatchList();
  }

  const fetchMatchList = async () => {
    if (matches?.length > 0) {
      matches?.forEach(async (m,i) => {
        const res = await getMatch(m);
        setMatchList([...matchList, res?.data.info])
      })
      console.log(matchList);
    }
  }


  return (
    <BodyContainer>
      <div className="body-main">
        <aside></aside>
        <section>
          {matches && matches.map(m => <p>{m}</p>)}
          {/* {matchList && matchList.map((m) => {
            return (
              <div>
                <p>게임종류: {m?.gameMode}</p>
                <p>게임시점: {m?.gameStartTimestamp}</p>
                <p></p>
              </div>
            )}
          )} */}
        </section>
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
