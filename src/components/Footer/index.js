import React from 'react'
import * as S from './styles'
import Wrapper from '../Wrapper'
import Link from 'next/link'
import * as C from './../../styles/common'

const Footer = (props) => (
  <S.Footer>
    <Wrapper size="large">
      <S.FooterInner>
        <S.Logo>
          <Link href="/" as="/">
            <a>
              <C.Glitch text="MLua">MLua</C.Glitch>
            </a>
          </Link>
        </S.Logo>
        <S.ExternalLinks>
          <a href="https://github.com/Lincerossa" target="_blank">Github</a>
          <a href="https://twitter.com/cav_lince" target="_blank">Twitter</a>
          <a href="https://www.linkedin.com/in/marcello-luatti/" target="_blank">Linkedin</a>
        </S.ExternalLinks>
      </S.FooterInner>
    </Wrapper>
  </S.Footer>
)


export default Footer
