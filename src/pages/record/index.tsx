import React, { useState, useEffect } from 'react'
import { getSummonerInfo } from '../../services'
import Layout from '../../components/layout'
import RecordItem from '../../components/record/recordItem'

const RecordPage = () => {
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
      <h3>전적 페이지</h3>
      <RecordItem accountId={user.summonerLevel} name={user.name} />
    </Layout>
  )
}

export default RecordPage
