import styled from 'styled-components'



export const HeroWrapper = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center center;
  }
`



export const HeroHeader = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  z-index:1;
`


export const Maintitle = styled.div`
  font-family: sans-serif;
  color: white;
  font-size: 3rem;
  font-weight: 300;
  text-transform: uppercase;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: ${props => props.theme.colors.primary};

`


export const Supertitle = styled.div`
  text-transform: uppercase;
  color: white;
`

export const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1rem;
  color: white;
`


export const Subtitle = styled.div`
  text-transform: uppercase;
  color: white;
  font-weight: 300;
`
