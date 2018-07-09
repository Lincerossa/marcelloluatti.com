import App, {Container} from 'next/app'
import React from 'react'
import Layout from '../layout'
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
      <Layout>
        <Component {...this.props} />
      </Layout>
    </Container>
  }
}