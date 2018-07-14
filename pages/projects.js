import React from 'react'
import Link from 'next/link'

import { List, Wrapper, Padder, Card, TextBlock, Background } from '../components'
import { DataConsumer } from '../hoc/withDataProvider'
import globalProvider from '../hoc'
import theme from '../styles/theme'

const Page = () => (
  <>
    <TextBlock textColor="#fff" color={theme.colors.orange}>
      <h1>Projects</h1> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mi magna, blandit vel mauris id, venenatis euismod dolor. Nullam orci erat, tincidunt at dapibus eget, iaculis ut massa. Praesent ut justo quis ligula volutpat lacinia. Integer ac pulvinar nibh, et feugiat tortor. Fusce vehicula eleifend quam. Vivamus leo lectus, tristique vitae augue eu, faucibus lobortis magna. Nulla facilisi.

Vestibulum et feugiat ex. Maecenas libero tortor, aliquet id condimentum nec, lobortis sed dolor. Nunc nec erat non odio dignissim tempor. Maecenas et ligula vitae enim lacinia mattis porta vitae ex. Mauris et congue dolor. Aenean id odio venenatis, condimentum nibh eu, tempus urna. Aliquam venenatis lacus venenatis malesuada tincidunt. Phasellus porttitor facilisis consequat. Quisque commodo massa augue, eget eleifend augue commodo id.</p>
    </TextBlock>
    <Background color={theme.colors.lightGrey} textColor={theme.colors.orange}>
      <Wrapper size="medium">
        <Padder size="small">
          <DataConsumer>
            {
              ({ projects }) => {
                if(!projects || !projects.length) return null
                  return(
                  <List
                    columns="3"
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