import React from 'react'
import Layout from '../../components/layout'
import RecordItem from '../../components/record/recordItem'

const RecordPage = () => {
  return (
    <Layout>
      <h3>전적 페이지</h3>
      <RecordItem accountId={1} name={'Mal Francais'} />
    </Layout>
  )
}

export default RecordPage
