import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getSummonerInfo } from '../../services'
import Layout from '../../components/layout'
import SummonerTop from '../..//components/summoner/summonerTop'

const SummonerPage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchSummonerInfo();
  }, [])

  const fetchSummonerInfo = async () => {
    const res = await getSummonerInfo('Mal Francais');
    await setUser(res.data);
  }

  return (
    <Layout>
      <SummonerContainer>
        <SummonerTop />
        <div className='summoner-body'>
          <section></section>
          <section></section>
        </div>
      </SummonerContainer>
    </Layout>
  )
}

const SummonerContainer = styled.main`

  .summoner-body {
    height: 1000px;
    border: 1px solid blue;
  }
`;

export default SummonerPage
