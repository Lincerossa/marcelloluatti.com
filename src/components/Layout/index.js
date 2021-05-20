import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSpring, animated } from 'react-spring';
import Logo from './logo.svg'
import Hamburger from './hamburger.svg'
import Close from './close.svg'
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
  const [{ initial, direction }, setScrollStatus] = useState({ position: 0, initial: true, direction: 'up' })
  const [isMenuOpen, setMenuOpen] = useState(null)
  const router = useRouter()

  function handleGetDirection() {
    setScrollStatus((prevState) => ({
      position: window.scrollY,
      initial: window.scrollY < 250,
      direction: (window.scrollY > prevState.position) && (window.scrollY > 600) ? 'down' : 'up',
    }))
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', () => setMenuOpen(false))

    window.addEventListener('scroll', handleGetDirection, false)
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('scroll', handleGetDirection, false)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.document.getElementsByTagName('html')[0].style.overflowY = isMenuOpen ? 'hidden' : 'visible'
    }
  }, [isMenuOpen])

  return (
    <S.Main>
      <S.Header direction={direction} isMenuOpen={isMenuOpen} initial={initial}>
        <Wrapper size="large">
          <S.HeaderInner>
            <Link href="/" as="/">
              <a>
                <S.Logo initial={initial} isMenuOpen={isMenuOpen}>
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
                    <S.MenuItem key={e.slug} isActive={e.slug === slug} direction={direction} isMenuOpen={isMenuOpen} initial={initial}>
                      <Link href="/[...dynamic]" as={`/${e.slug}`}>
                        <a>{e.label}</a>
                      </Link>
                    </S.MenuItem>
                  ))
                }
                </S.MenuItems>
              </S.Menu>

              <S.Hamburger isMenuOpen={isMenuOpen} initial={initial} onClick={() => setMenuOpen(!isMenuOpen)}>
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
                <S.Logo initial>
                  <Logo />
                </S.Logo>
              </a>
            </Link>
            <S.ExternalLinks>
              <S.ExternalLink href="https://github.com/Lincerossa" target="_blank" rel="noreferrer">Github</S.ExternalLink>
              <S.ExternalLink href="https://twitter.com/cav_lince" target="_blank" rel="noreferrer">Twitter</S.ExternalLink>
              <S.ExternalLink href="https://www.linkedin.com/in/marcello-luatti/" target="_blank" rel="noreferrer">Linkedin</S.ExternalLink>
            </S.ExternalLinks>
          </S.FooterInner>
        </Wrapper>
      </S.Footer>
      )}
      {typeof window !== 'undefined' && window.innerWidth > 768 && <MagicMouse />}
    </S.Main>
  )
}

export default Layout
