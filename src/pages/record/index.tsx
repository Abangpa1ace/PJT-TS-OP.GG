import React, { useEffect } from 'react'
import satc from '../../utils';
import { getSummonerInfo } from '../../services'
import Layout from '../../components/layout'
import RecordItem from '../../components/record/recordItem'

const RecordPage = () => {
  useEffect(() => {
    fetchSummonerInfo();
  }, [])

  const fetchSummonerInfo = async () => {
    const res = await getSummonerInfo('Darvey');
    return res;
  }

  return (
    <Layout>
      <h3>전적 페이지</h3>
      <RecordItem accountId={1} name={'Mal Francais'} />
    </Layout>
  )
}

export default RecordPage
