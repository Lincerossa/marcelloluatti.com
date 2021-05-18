import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import { useSpring, animated } from 'react-spring';
import Logo from './logo.svg'
import { useScrollDirection } from '../../hooks'
import Wrapper from '../Wrapper'
import * as S from './styles'
import * as C from '../../styles/common'

const Layout = ({ children, label, layout, slug, routes }) => {
  const mouseTracker = useRef()
  const [mousePosition, setMousePosition] = useState()
  const styles = useSpring({ from: { left: 0, top: 0 }, to: { left: mousePosition?.clientX, top: mousePosition?.clientY } })
  const { scrollDirection, scrollPosition } = useScrollDirection()
  const [isMenuOpen, setMenuOpen] = useState(null)
  const router = useRouter()
  const innerHeight = (typeof window !== 'undefined' && window.innerHeight) || 100
  const shouldBeInverted = (scrollPosition < innerHeight)

  useEffect(() => {
    window.addEventListener('mousemove', setMousePosition)
    return () => window.removeEventListener('mousemove', setMousePosition)
  }, [mouseTracker])

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
            <Link href="/" as="/">
              <a>
                <S.Logo>
                  <Logo />
                </S.Logo>
              </a>
            </Link>
            {layout !== 'full' && (
            <>
              <S.Menu isMenuOpen={isMenuOpen} inverted={shouldBeInverted}>
                <S.MenuItems>
                  {
                  routes?.filter((e) => !e.hidden).map((e) => (
                    <S.MenuItem key={e.slug} isActive={e.slug === slug} inverted={shouldBeInverted}>
                      <Link href="/[...dynamic]" as={`/${e.slug}`}>
                        <a>{e.label}</a>
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
            <Link href="/" as="/">
              <a>
                <S.Logo>
                  <Logo />
                </S.Logo>
              </a>
            </Link>
            <S.ExternalLinks>
              <a href="https://github.com/Lincerossa" target="_blank" rel="noreferrer">Github</a>
              <a href="https://twitter.com/cav_lince" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://www.linkedin.com/in/marcello-luatti/" target="_blank" rel="noreferrer">Linkedin</a>
            </S.ExternalLinks>
          </S.FooterInner>
        </Wrapper>
      </S.Footer>
      )}
      <S.MousePoint style={{ position: 'fixed', left: mousePosition?.clientX, top: mousePosition?.clientY }} />
      <animated.div style={{ position: 'fixed', zIndex: 1, ...styles }} ref={mouseTracker}>
        <S.MouseTracker />
      </animated.div>
    </S.Main>
  )
}

export default Layout