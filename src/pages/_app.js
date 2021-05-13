import React from "react"
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css';
import theme from '../styles/theme'
import * as C from '../styles/common'
import GlobalStyle from '../styles/global'
import {Footer, Header, Wrapper } from '../../src/components'
import { routes } from '../data'

function App({ Component, pageProps }) {
  const { route } = pageProps
  const { metaTitle, metaDescription, label, hiddenLabel, hiddenFooter } = route || {}
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="title" content={metaTitle} />
        <meta property="description" content={metaDescription} />
        <meta property="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta property="og:type" content="website" />
        <link defer async href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500&display=swap" rel="stylesheet" />
       </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Main>
          <Header route={route} routes={routes} showMenu={!hiddenLabel} />
          {!hiddenLabel && label && <MainLabel><Wrapper size="large"><C.Glitch text={label}>{label}</C.Glitch></Wrapper></MainLabel>}
          <Component {...pageProps} />
          {!hiddenFooter && <Footer />}
        </Main>
      </ThemeProvider>
    </>
  )
}

const Main = styled.main`
  min-height: 100vh;
`
const MainLabel = styled.div`
  height: 100vh;
  position: relative;
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  font-size: 5rem;
  @media (min-width: 978px){
    font-size: 15rem;
  }
`

export default App