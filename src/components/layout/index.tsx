import React, { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components';
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

type Props = {
  children: ReactNode;
  isBlue?: boolean;
}

const Layout: React.FC<Props> = ({ children, isBlue }) => {
  return (    
    <LayoutStyle isBlue={isBlue}>
      <Head>
        <title>롤 전적 검색 OP.GG</title>
        <link rel="icon" href="/assets/favicon.ico" />
        {/* <meta keyword='키워드!' contents='키워드!' /> */}
      </Head>
      <AppHeader />
      <main id="page">
        {children}
      </main>
      <AppFooter isFontWhite={isBlue} />
    </LayoutStyle>
  )
}

const LayoutStyle = styled.div`
  background-color: ${({ theme, isBlue }) => isBlue && theme.blue.theme};
  min-height: 100vh;

  #page {
    width: ${({ theme }) => theme.width.main};
    margin: 0 auto;
    padding: 30px 0 ;
  }
`

export default Layout
