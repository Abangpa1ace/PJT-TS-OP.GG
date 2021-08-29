import React from 'react'

const RecordItem: React.FC<RecordProps> = ({ accountId, name }) => {
  return (
    <div>
      개인ID : {accountId} <br />
      소환사명: {name}
    </div>
  )
}

export default RecordItem
