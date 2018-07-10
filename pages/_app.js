import App, {Container} from 'next/app'
import React from 'react'
import Layout from '../layout'
import { DataProvider } from '../data'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'



export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component} = this.props
    return <Container>
      <DataProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...this.props} />
          </Layout>
        </ThemeProvider>
      </DataProvider>
    </Container>
  }
}