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
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        {/* <meta keyword='키워드!' contents='키워드!' /> */}
      </Head>
      <AppHeader />
      {children}
      <AppFooter isFontWhite={isBlue} />
    </LayoutStyle>
  )
}

export default Layout

const LayoutStyle = styled.div`
  background-color: ${({ theme, isBlue }) => isBlue && theme.blue.theme};
  min-height: 100vh;
`