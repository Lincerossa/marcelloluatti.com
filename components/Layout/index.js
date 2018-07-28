import React from 'react'
import * as S from './styles'
import Header from '../Header'
import Footer from '../Footer'

import Head from 'next/head'


export default ({children, options, url}) => {
  
  const basic = options && options.layout && options.layout.basic

  const seo = {
    title: (url && url.query && url.query.seo && url.query.seo.title) || 'Marcello Luatti',
    description: (url && url.query && url.query.seo && url.query.seo.description) || 'Hi, I am Marcello'
  }

  return(
    <React.Fragment>
      <Head>
        <title>{seo.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={seo.description} />
      </Head>
      <S.Layout basic={basic} >
      { !basic && <Header />}
        <S.Main>
          {children}
        </S.Main>
        { !basic && <Footer />}
      </S.Layout>
    </React.Fragment>
  )
}