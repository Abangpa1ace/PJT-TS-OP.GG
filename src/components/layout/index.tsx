import React, { ReactNode } from 'react'
import Head from 'next/head'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

const Layout: React.FC<ReactNode> = ({ children }) => {
  return (    
    <div>
      <Head>
        <title>롤 전적 검색 OP.GG</title>
        <link rel="icon" href="/static/favicon.ico" />
        {/* <meta keyword='키워드!' contents='키워드!' /> */}
      </Head>
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  )
}

export default Layout
