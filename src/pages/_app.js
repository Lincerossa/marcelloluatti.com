import React from "react"
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css';
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import {Footer, Header, MagicMouse } from '../../src/components'
import { routes } from '../data'

function App({ Component, pageProps }) {
  const { route } = pageProps
  const { inverted, metaTitle, metaDescription } = route
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
          <Header route={route} routes={routes} inverted={inverted ? true : false} />
          <Component {...pageProps} />
          <Footer />
        </Main>
      </ThemeProvider>
    </>
  )
}

const Main = styled.main`
  min-height: 100vh;
  padding-top: ${props => props.hasTitle ? '6rem' : '0'};
  ${props => props.status === "loading" && 'opacity: 0'};
`

export default App