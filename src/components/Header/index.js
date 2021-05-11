import React, { useState} from 'react'
import Link from 'next/link'
import { CloseOutlined,MenuOutlined } from '@ant-design/icons';
import Wrapper from '../Wrapper'
import * as S from './styles'
import Logo from '../Logo'
import { useScrollDirection } from '../../hooks'


const Header = ({ routes, route }) => {
  const {scrollDirection, scrollPosition} = useScrollDirection()
  const [isOpen, setMenuOpen] = useState(null)

  const innerHeight = (typeof window !== "undefined" && window.innerHeight) || 100

  const shouldBeInverted =  (scrollPosition < innerHeight)
  
  return (
    <S.Header scrollDirection={scrollDirection} isOpen={isOpen} inverted={shouldBeInverted}>
      <Wrapper size="large">
        <S.HeaderInner>
          <S.Logo inverted={shouldBeInverted}>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </S.Logo>
          <S.Menu isOpen={isOpen} inverted={shouldBeInverted}>
            <S.MenuItems>
              {
                routes?.filter(e => !e.hidden).map((e) => {
                  const {slug, label} = e || {}
                  const isActive = slug === route?.slug
                  return(
                    <S.MenuItem key={slug} isActive={isActive} inverted={shouldBeInverted}>
                      <Link href={`/${slug}`}><a>{label}</a></Link>
                    </S.MenuItem>
                  )
                })
              }
              </S.MenuItems>
            </S.Menu>
          <S.Hamburger isOpen={isOpen} inverted={shouldBeInverted} onClick={() => setMenuOpen(!isOpen)}>
            { isOpen ? <CloseOutlined /> : <MenuOutlined />}</S.Hamburger>
        </S.HeaderInner>
      </Wrapper>
    </S.Header>
  )
}

export default React.memo(Header)