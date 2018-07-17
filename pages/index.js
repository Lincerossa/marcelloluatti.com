import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { List, Wrapper, Padder, Card, Background, Sky, TextBlock } from '../components'
import globalProvider from '../hoc'
import theme from '../styles/theme'
import { DataConsumer } from '../hoc/withDataProvider'


const Page = () => (
  <>
    <Sky 
      fixed  
      stars={200}
      renderTitle={() => (
        <SkyTitle>
          <Wrapper>
            <SkiTitleLine1>Hi,</SkiTitleLine1> 
            <SkiTitleLine2>I am <span>Marcello</span></SkiTitleLine2>
          </Wrapper>
        </SkyTitle>
      )} 
    />


    <TextBlock color={{text: 'white', background:theme.colors.orange}}>
      <h1>Work in Progress 💅🏻</h1>
      <p>Consectetur adipiscing elit. Morbi vel erat massa. Praesent velit ex, dapibus sit amet facilisis et, bibendum ut magna. Praesent efficitur sapien nisl, nec ornare erat consectetur nec. Suspendisse sed scelerisque ex. Curabitur quis orci auctor, ultricies diam non, tincidunt dolor. Nam at mollis nibh. Fusce tortor lacus, faucibus nec lacus eget, efficitur tempus tortor. Nunc volutpat finibus quam, eget feugiat lectus rhoncus a. Fusce accumsan augue ac risus tempor vestibulum. Vivamus pharetra fringilla auctor. Praesent eu vestibulum arcu. Suspendisse a luctus dolor, quis fringilla tortor. Morbi scelerisque ante mi, vel sollicitudin velit luctus a. Maecenas auctor, nibh in ullamcorper tincidunt, sapien nulla elementum ipsum, id tincidunt nibh nisi vulputate nunc. Sed fringilla mauris quis purus finibus, non lacinia lectus gravida. Aliquam erat volutpat. Etiam pellentesque massa eget viverra vehicula. In ut ante justo. Sed nec metus nisl. Quisque eget est non turpis ultricies dapibus viverra pretium puru Vivamus in mauris sed arcu pharetra loborti Integer vitae feugiat ante. Sed hendrerit iaculis erat, molestie malesuada lectus laoreet eu. Donec facilisis, risus sed porttitor malesuada, metus turpis bibendum ipsum, quis viverra elit mauris vel ipsum. Donec lacinia magna nec nibh interdum, in luctus 
      </p>
      
      <div>
        <a href="https://github.com/Lincerossa/marcelloluatti.com/"><svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" fill="white" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
      </div>
    </TextBlock>




    <Background color={{background: theme.colors.lightGrey}}>
     
        <Wrapper>

          <Padder size="small">
            <DataConsumer>
                {
                ({ projects }) => {
                  if(!projects || !projects.length) return null
                    return(
                      <List
                        items={projects}
                        columns="3"
                        renderLastItem={() => (
                          <LastItem>
                            <div>New <span> Projects </span> are coming 🚀</div>
                          </LastItem>
                        )}
                        ListItem={({ item }) => {
                          return( 
                            <Link href={`/project/${item.slug}`}>
                              <div style={{color: "currentColor", height: "100%"}}>
                                <Card {...item} options={{full: true}}/>
                              </div>
                            </Link>
                          )
                        }}
                      />
                  )
                }
              }
            </DataConsumer>
          </Padder>


          <Padder size="small">
            <DataConsumer>
                {
                ({ posts }) => {
                  if(!posts || !posts.length) return null
                    return(
                      <List
                        items={posts}
                        limit="3"
                        columns="4"
                        renderLastItem={() => (
                          <Link href="/posts">
                            <div style={{color: "currentColor", height: "100%"}}>
                              <LastItem inverted>
                                <div>Read more...</div>
                              </LastItem>
                            </div>
                          </Link>
                        )}
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
                  )
                }
              }
            </DataConsumer>
          </Padder>
        </Wrapper>
    </Background>
  </>
)

const SkyTitle = styled.div`
  bottom: 50%;
  left: 0;
  right: 0;
  position: absolute;
  color: white;
  font-size: 2rem;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
    bottom: 20%;
    padding: 0;
    text-align: left;
  }

`

const SkiTitleLine1 = styled.div``
const SkiTitleLine2 = styled.div`
  span {
    color: ${props => props.theme.colors.orange};
    margin-right: .5rem;
  }
`

const LastItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-align: center;
  height: 100%;
  border: 1px solid;
  background-color: ${props => props.inverted ? props.theme.colors.dark : 'inherit'};
  color: ${props => props.inverted ? "white" : 'inherit'};
  cursor: ${props => props.inverted ? "pointer" : 'inherit'}; 
  span {
    color: ${props => props.theme.colors.orange};
  }

`

export default globalProvider({  
  layout: {
    basic: true,
}})(Page)