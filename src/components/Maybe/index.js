import React from 'react'

import Background from '../Background'
import Wrapper from '../Wrapper'
import Padder from '../Padder'

export const WithBackground = ({background, children}) => {

 if( background){
   return <Background background={background}>{children} </Background>
 } 
 return children
}

export const WithWrapper = ({wrapper, children}) => {

 if( wrapper){
   return <Wrapper size={wrapper}>{children} </Wrapper>
 } 
 return children
}

export const WithPadder = ({padder, children}) => {

 if(padder){
   return <Padder size={padder}>{children} </Padder>
 } 
 return children
}
