import React, { useState, ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components';
import Layout from '../components/layout'

export default function Home() {

  return (
    <Layout isBlue>
      <HomePage>
        <h2>랜딩 페이지!!!</h2>
      </HomePage>
    </Layout>
  )
}

const HomePage = styled.div`

`;
