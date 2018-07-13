import React, {Fragment} from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { List, Wrapper, Padder, Background, Card, Sky } from '../components'
import { DataConsumer } from '../hoc/withDataProvider'
import globalProvider from '../hoc'


const Page = () => (
  <Fragment>
    <Sky stars={200} background="black" color="white" fixed   title="Hi, I am Marcello👻" />
    <Background color="#e2473b" textColor="#fff">
      <Wrapper> 
        <Padder size="big">
        <h1>Lorem ipsum dolor sit amet</h1>, consectetur adipiscing elit. Morbi vel erat massa. Praesent velit ex, dapibus sit amet facilisis et, bibendum ut magna. Praesent efficitur sapien nisl, nec ornare erat consectetur nec. Suspendisse sed scelerisque ex. Curabitur quis orci auctor, ultricies diam non, tincidunt dolor. Nam at mollis nibh. Fusce tortor lacus, faucibus nec lacus eget, efficitur tempus tortor. Nunc volutpat finibus quam, eget feugiat lectus rhoncus a. Fusce accumsan augue ac risus tempor vestibulum. Vivamus pharetra fringilla auctor. Praesent eu vestibulum arcu. Suspendisse a luctus dolor, quis fringilla tortor. Morbi scelerisque ante mi, vel sollicitudin velit luctus a. Maecenas auctor, nibh in ullamcorper tincidunt, sapien nulla elementum ipsum, id tincidunt nibh nisi vulputate nunc. Sed fringilla mauris quis purus finibus, non lacinia lectus gravida. Aliquam erat volutpat. Etiam pellentesque massa eget viverra vehicula. In ut ante justo. Sed nec metus nisl. Quisque eget est non turpis ultricies dapibus viverra pretium puru Vivamus in mauris sed arcu pharetra loborti Integer vitae feugiat ante. Sed hendrerit iaculis erat, molestie malesuada lectus laoreet eu. Donec facilisis, risus sed porttitor malesuada, metus turpis bibendum ipsum, quis viverra elit mauris vel ipsum. Donec lacinia magna nec nibh interdum, in luctus 
        </Padder>
      </Wrapper>
    </Background>

    <Background color="#1d1824" textColor="#ac01ff">
      <Wrapper> 
        <Padder size="big">
        <h2>Lorem ipsum dolor sit amet</h2>, consectetur adipiscing elit. Morbi vel erat massa. Praesent velit ex, dapibus sit amet facilisis et, bibendum ut magna. Praesent efficitur sapien nisl, nec ornare erat consectetur nec. Suspendisse sed scelerisque ex. Curabitur quis orci auctor, ultricies diam non, tincidunt dolor. Nam at mollis nibh. Fusce tortor lacus, faucibus nec lacus eget, efficitur tempus tortor. Nunc volutpat finibus quam, eget feugiat lectus rhoncus a. Fusce accumsan augue ac risus tempor vestibulum. Vivamus pharetra fringilla auctor. Praesent eu vestibulum arcu. Suspendisse a luctus dolor, quis fringilla tortor. Morbi scelerisque ante mi, vel sollicitudin velit luctus a. Maecenas auctor, nibh in ullamcorper tincidunt, sapien nulla elementum ipsum, id tincidunt nibh nisi vulputate nunc. Sed fringilla mauris quis purus finibus, non lacinia lectus gravida. Aliquam erat volutpat. Etiam pellentesque massa eget viverra vehicula. In ut ante justo. Sed nec metus nisl. Quisque eget est non turpis ultricies dapibus viverra pretium puru Vivamus in mauris sed arcu pharetra loborti Integer vitae feugiat ante. Sed hendrerit iaculis erat, molestie malesuada lectus laoreet eu. Donec facilisis, risus sed porttitor malesuada, metus turpis bibendum ipsum, quis viverra elit mauris vel ipsum. Donec lacinia magna nec nibh interdum, in luctus 
        </Padder>
      </Wrapper>
    </Background>

    <Background color="#f4f5ef">
      <Wrapper>
        <Padder size="small">
          <Disclaimer>Work in Progress 💅🏻</Disclaimer>
          <LogoWrapper>
            <a href="https://github.com/Lincerossa/marcelloluatti.com/"><svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
          </LogoWrapper>
          <Padder size="small">
            
            <Wrapper>
              <Padder size="small">
                <DisclaimerSub>Alcuni Link:</DisclaimerSub>
                <DataConsumer>
                  {
                    ({posts}) => {
                      if(!posts || !posts.length) return null
                      
                      return(
                        <Padder size="small">
                          <ListGroup>
                            <ListTitle>I post</ListTitle>
                              <List
                                items={posts}
                                ListItem={({ item }) => {
                                  return( 
                                    <Link href={`/post/${item.slug}`}>
                                      <div style={{color: "currentColor", height: "100%"}}>
                                        <Card {...item} />
                                      </div>
                                    </Link>
                                  )
                                }}
                              />
                          </ListGroup>
                        </Padder>
                      )
                    }
                  }
                </DataConsumer>

                <DataConsumer>
                  {
                    ({ projects }) => {
                      if(!projects || !projects.length) return null
                        return(
                        <Padder size="small">
                          <ListGroup>
                            <ListTitle>Qui andranno i progetti</ListTitle>
                              <List
                                items={projects}
                                ListItem={({ item }) => {
                                  return( 
                                    <Link href={`/project/${item.slug}`}>
                                      <div style={{color: "currentColor", height: "100%"}}>
                                        <Card {...item} options={{full:true}} />
                                      </div>
                                    </Link>
                                  )
                                }}
                              />
                          </ListGroup>
                        </Padder>
                      )
                    }
                  }
                </DataConsumer>
              </Padder>
                
            </Wrapper>
              
          </Padder>
        </Padder>
      </Wrapper>
    </Background>
  </Fragment>
)


const Disclaimer = styled.div`
  text-transform: uppercase;
  font-family: sans-serif;
  font-size: 2rem;
  letter-spacing: .04em;
  border-bottom: 1px solid #f5f5f5;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }  
`

const LogoWrapper = styled.div`
  text-align: center;
`

const DisclaimerSub = styled.div`
  font-weight: 600;
  margin-bottom: .5rem;
`

const ListGroup = styled.div`
`

const ListTitle = styled.div``

export default globalProvider({  
  layout: {
    basic: true,
}})(Page)