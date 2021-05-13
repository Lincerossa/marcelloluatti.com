import React, { useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CloseOutlined,MenuOutlined } from '@ant-design/icons';
import Wrapper from '../Wrapper'
import * as S from './styles'
import * as C from './../../styles/common'
import { useScrollDirection } from '../../hooks'


const Header = ({ routes, route, showMenu }) => {
  const {scrollDirection, scrollPosition} = useScrollDirection()
  const [isOpen, setMenuOpen] = useState(null)
  const router = useRouter()
  const innerHeight = (typeof window !== "undefined" && window.innerHeight) || 100

  const shouldBeInverted =  (scrollPosition < innerHeight)

  return (
    <S.Header scrollDirection={scrollDirection} isOpen={isOpen} inverted={shouldBeInverted}>
      <Wrapper size="large">
        <S.HeaderInner>
          <S.Logo onClick={() => router.push("/")}>
            <a>
              <C.Glitch text="MLua" >MLua</C.Glitch>
            </a>
          </S.Logo>
          {showMenu && <S.Menu isOpen={isOpen} inverted={shouldBeInverted}>
            <S.MenuItems>
              {
                routes?.filter(e => !e.hidden).map((e) => {
                  const {slug, label} = e || {}
                  const isActive = slug === route?.slug
                  return(
                    <S.MenuItem key={slug} isActive={isActive} inverted={shouldBeInverted} onClick={() => router.push(`/${slug}`)}>
                      <a>{label}</a>
                    </S.MenuItem>
                  )
                })
              }
              </S.MenuItems>
            </S.Menu>}
          {showMenu && <S.Hamburger isOpen={isOpen} inverted={shouldBeInverted} onClick={() => setMenuOpen(!isOpen)}>
            { isOpen ? <CloseOutlined /> : <MenuOutlined />}</S.Hamburger>}
        </S.HeaderInner>
      </Wrapper>
    </S.Header>
  )
}

export default React.memo(Header)