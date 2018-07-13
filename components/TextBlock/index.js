import React from 'react'

import Background from '../Background'
import Wrapper from '../Wrapper'
import Padder from '../Padder'
import RichText from '../RichText'

const TextBlock = ({color="white", textColor="black", children}) => (
  <Background color={color} textColor={textColor}>
    <Wrapper> 
      <Padder size="big">
        <RichText>
          {children}
        </RichText>
      </Padder>
    </Wrapper>
  </Background>
)

export default TextBlock
