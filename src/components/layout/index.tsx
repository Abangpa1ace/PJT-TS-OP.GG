import React, { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components';
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

const Layout: React.FC<ReactNode> = ({ children }) => {
  return (    
    <LayoutStyle>
      <Head>
        <title>롤 전적 검색 OP.GG</title>
        <link rel="icon" href="/assets/favicon.ico" />
        {/* <meta keyword='키워드!' contents='키워드!' /> */}
      </Head>
      <AppHeader />
      <main id="page">
        {children}
      </main>
      <AppFooter />
    </LayoutStyle>
  )
}

const LayoutStyle = styled.div`
  #page {
    width: ${({ theme }) => theme.width.main};
    min-height: 80vh;
    margin: 0 auto;
    padding: 30px 0 ;
  }
`

export default Layout
