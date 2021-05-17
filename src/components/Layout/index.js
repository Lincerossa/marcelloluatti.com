import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import { useScrollDirection } from '../../hooks'
import Wrapper from '../Wrapper'
import * as S from './styles'
import * as C from '../../styles/common'

const Layout = ({ children, label, layout, route, routes }) => {
  const { scrollDirection, scrollPosition } = useScrollDirection()
  const [isMenuOpen, setMenuOpen] = useState(null)
  const router = useRouter()
  const innerHeight = (typeof window !== 'undefined' && window.innerHeight) || 100

  const shouldBeInverted = (scrollPosition < innerHeight)

  function handleCloseMenu() {
    setMenuOpen(false)
  }
  function handleToggleMenu() {
    setMenuOpen(!isMenuOpen)
  }
  useEffect(() => {
    router.events.on('routeChangeComplete', handleCloseMenu)
    return () => router.events.off('routeChangeComplete', handleCloseMenu)
  }, [])

  return (
    <S.Main>
      <S.Header scrollDirection={scrollDirection} isMenuOpen={isMenuOpen} inverted={shouldBeInverted}>
        <Wrapper size="large">
          <S.HeaderInner>
            <S.Logo>
              <Link href="/" as="/">
                <a>
                  <C.Glitch text="MLua">MLua</C.Glitch>
                </a>
              </Link>
            </S.Logo>
            {layout !== 'full' && (
            <>
              <S.Menu isMenuOpen={isMenuOpen} inverted={shouldBeInverted}>
                <S.MenuItems>
                  {
                  routes?.filter((e) => !e.hidden).map(({ slug, label }) => (
                    <S.MenuItem key={slug} isActive={slug === route?.slug} inverted={shouldBeInverted}>
                      <Link href="/[...dynamic]" as={`/${slug}`}>
                        <a>{label}</a>
                      </Link>
                    </S.MenuItem>
                  ))
                }
                </S.MenuItems>
              </S.Menu>

              <S.Hamburger isMenuOpen={isMenuOpen} inverted={shouldBeInverted} onClick={handleToggleMenu}>
                { isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
              </S.Hamburger>
            </>
            )}

          </S.HeaderInner>
        </Wrapper>
      </S.Header>
      {layout !== 'full' && <S.MainLabel><Wrapper size="large"><C.Glitch text={label}>{label}</C.Glitch></Wrapper></S.MainLabel>}
      {children}
      {layout !== 'full' && (
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
              <a href="https://github.com/Lincerossa" target="_blank" rel="noreferrer">Github</a>
              <a href="https://twitter.com/cav_lince" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://www.linkedin.com/in/marcello-luatti/" target="_blank" rel="noreferrer">Linkedin</a>
            </S.ExternalLinks>
          </S.FooterInner>
        </Wrapper>
      </S.Footer>
      )}
    </S.Main>
  )
}

export default Layout
