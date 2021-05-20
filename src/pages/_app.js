import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';
import { Layout } from '../components';
import { routes } from '../data'

function App({ Component, pageProps }) {
  const { route } = pageProps;
  const { metaTitle, metaDescription, metaImage } = route || {};
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="title" content={metaTitle} />
        <meta property="description" content={metaDescription} />
        <meta property="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta property="og:type" content="website" />
        <link defer async href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500&display=swap" as="font" />
        <link href="favicon.ico" rel="icon" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout {...route} routes={routes}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
