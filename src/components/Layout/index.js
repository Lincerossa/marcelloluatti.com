import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSpring, animated } from 'react-spring';
import Logo from './logo.svg'
import Hamburger from './hamburger.svg'
import Close from './close.svg'
import { useScrollDirection } from '../../hooks'
import Wrapper from '../Wrapper'
import * as S from './styles'

import * as C from '../../styles/common'

const MagicMouse = React.memo(() => {
  const [{ clientX: left, clientY: top }, setMousePosition] = useState({ clientX: 0, clientY: 0 })
  const styles = useSpring({ from: { left: 0, top: 0 }, to: { left, top } })
  useEffect(() => {
    window.addEventListener('mousemove', setMousePosition)
    return () => window.removeEventListener('mousemove', setMousePosition)
  }, [])

  return (
    <>
      <S.MousePoint style={{ left, top }} />
      <animated.div style={{ position: 'fixed', zIndex: 3, ...styles }}>
        <S.MouseTracker />
      </animated.div>
    </>
  )
})

const Layout = ({ children, label, layout, slug, routes }) => {
  const { scrollDirection, scrollPosition } = useScrollDirection()
  const [isMenuOpen, setMenuOpen] = useState(null)
  const router = useRouter()
  const inverted = scrollPosition < 200

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
      <S.Header scrollDirection={scrollDirection} isMenuOpen={isMenuOpen} inverted={inverted}>
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
              <S.Menu isMenuOpen={isMenuOpen}>
                <S.MenuItems>
                  {
                  routes?.filter((e) => !e.hidden).map((e) => (
                    <S.MenuItem key={e.slug} isActive={e.slug === slug}>
                      <Link href="/[...dynamic]" as={`/${e.slug}`}>
                        <a>{e.label}</a>
                      </Link>
                    </S.MenuItem>
                  ))
                }
                </S.MenuItems>
              </S.Menu>

              <S.Hamburger isMenuOpen={isMenuOpen} inverted={inverted} onClick={handleToggleMenu}>
                { isMenuOpen ? <Close /> : <Hamburger />}
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
      <MagicMouse />
    </S.Main>
  )
}

export default Layout
