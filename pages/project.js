import React from 'react'

import { Wrapper, Padder, Background, PostHero } from '../components'
import globalProvider from '../hoc'

const Page = ({ url }) => {

  const { query } = url
  const { supertitle, title, subtitle, media, content } = query

  return (
    <React.Fragment>
      <PostHero 
        media={media}
        supertitle={supertitle}
        title={title}
        subtitle={subtitle}
      />
      <Background color="#e2473b" textColor="#fff">
        <Wrapper>
          <Padder size="big">
            { content && <div>{content}</div>}
          </Padder>
        </Wrapper>
      </Background>
    </React.Fragment>
  )
}



export default globalProvider(Page)