import React, { useEffect, useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CloseOutlined,MenuOutlined } from '@ant-design/icons';
import Wrapper from '../Wrapper'
import * as S from './styles'
import * as C from './../../styles/common'
import { useScrollDirection } from '../../hooks'


const Header = ({ routes, route, showMenu }) => {
  const {scrollDirection, scrollPosition} = useScrollDirection()
  const [isMenuOpen, setMenuOpen] = useState(null)
  const router = useRouter()
  const innerHeight = (typeof window !== "undefined" && window.innerHeight) || 100

  const shouldBeInverted =  (scrollPosition < innerHeight)
  
  function handleCloseMenu(){
    setMenuOpen(false)
  }
  useEffect(() => {
    router.events.on("routeChangeComplete", handleCloseMenu)
    return () => router.events.off("routeChangeComplete", handleCloseMenu)
  }, [])

  return (
    <S.Header scrollDirection={scrollDirection} isMenuOpen={isMenuOpen} inverted={shouldBeInverted}>
      <Wrapper size="large">
        <S.HeaderInner>
          <S.Logo>
            <Link href="/">
              <a>
                <C.Glitch text="MLua">MLua</C.Glitch>
              </a>
            </Link>
          </S.Logo>
          {showMenu && <S.Menu isMenuOpen={isMenuOpen} inverted={shouldBeInverted}>
            <S.MenuItems>
              {
                routes?.filter(e => !e.hidden).map(({slug, label}) => {
                  return(
                    <S.MenuItem key={slug} isActive={slug === route?.slug} inverted={shouldBeInverted}>
                      <Link href={`/${slug}`}>
                        <a>{label}</a>
                      </Link>
                    </S.MenuItem>
                  )
                })
              }
              </S.MenuItems>
            </S.Menu>}
          {showMenu && <S.Hamburger isMenuOpen={isMenuOpen} inverted={shouldBeInverted} onClick={() => setMenuOpen(!isMenuOpen)}>
            { isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}</S.Hamburger>}
        </S.HeaderInner>
      </Wrapper>
    </S.Header>
  )
}

export default Header