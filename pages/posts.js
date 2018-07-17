import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import theme from '../styles/theme'
import { List, Wrapper, Padder, Card, TextBlock, Background, Loading } from '../components'
import { DataConsumer } from '../hoc/withDataProvider'
import globalProvider from '../hoc'

const Input = (props) => (
  <InputWrapper>
    <input {...props} />
    {props.loading && <LoadingWrapper><Loading /></LoadingWrapper>}
  </InputWrapper>
)


const InputWrapper = styled.div`
  position: relative;
  max-width: 300px;
  input {
    width: 100%;
    margin: 0;
    font-size: 1.25rem;
    letter-spacing: .04em;
    padding: .25rem;
    font-family: sans-serif;
  }
`

const LoadingWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;

`





const Page = () => (
  <>
    <TextBlock color={{text: 'white', background:theme.colors.dark}}>
      <h1>Posts</h1> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mi magna, blandit vel mauris id, venenatis euismod dolor. Nullam orci erat, tincidunt at dapibus eget, iaculis ut massa. Praesent ut justo quis ligula volutpat lacinia. Integer ac pulvinar nibh, et feugiat tortor. Fusce vehicula eleifend quam. Vivamus leo lectus, tristique vitae augue eu, faucibus lobortis magna. Nulla facilisi.

Vestibulum et feugiat ex. Maecenas libero tortor, aliquet id condimentum nec, lobortis sed dolor. Nunc nec erat non odio dignissim tempor. Maecenas et ligula vitae enim lacinia mattis porta vitae ex. Mauris et congue dolor. Aenean id odio venenatis, condimentum nibh eu, tempus urna. Aliquam venenatis lacus venenatis malesuada tincidunt. Phasellus porttitor facilisis consequat. Quisque commodo massa augue, eget eleifend augue commodo id.</p>
    </TextBlock>
    <Background color={{background:theme.colors.lightGrey}}>
      <Wrapper size="medium">
        <Padder size="small">
          <DataConsumer>
            {
              ({ posts, loading, handleSearch}) => {
                  return(
                    <>
                      <Input
                        placeholder="Cerca un post" 
                        onChange={e => handleSearch({query: e.target.value, data: 'posts'})}
                        loading={loading}
                      />
                     {
                       (!posts || !posts.length)
                        ? <div> nessun post</div>
                        : (<List
                            vertical
                            columns="3"
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
                        )
                     } 
                      
                    </>
                )
              }
            }
          </DataConsumer>
        </Padder>
      </Wrapper>
    </Background>
  </>
)




export default globalProvider()(Page)