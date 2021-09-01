import React from 'react'

const SummonerItem: React.FC = ({ accountId, name }) => {
  return (
    <div>
      소환사 레벨 : {accountId} <br />
      소환사명 : {name}
    </div>
  )
}


export default SummonerItem
