import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getSummonerInfo } from '../../services'
import Layout from '../../components/layout'
import SummonerTop from '../../components/summoner/containers/SummonerTop'
import SummonerBody from '../../components/summoner/containers/SummonerBody'

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
        <SummonerTop user={user} />
        <SummonerBody user={user} puuid={user?.puuid} />
      </SummonerContainer>
    </Layout>
  )
}

const SummonerContainer = styled.main`


`;

export default SummonerPage
