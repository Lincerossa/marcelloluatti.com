import React from 'react'
import Link from 'next/link'

import theme from '../styles/theme'
import { List, Wrapper, Padder, Card, TextBlock, Background } from '../components'
import { DataConsumer } from '../hoc/withDataProvider'
import globalProvider from '../hoc'

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
              ({ posts }) => {
                if(!posts || !posts.length) return null
                  return(
                    <List
                      columns="6"
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
            }
          </DataConsumer>
        </Padder>
      </Wrapper>
    </Background>
  </>
)





export default globalProvider()(Page)