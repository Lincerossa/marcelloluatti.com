import styled from 'styled-components'

export const ImageWrapper = styled.div`
  img {
    transition: all .25s;
    display: block;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    position:relative;
  }

`

export const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background-image: radial-gradient(transparent, rgb(0,0,0,.2));
  top: 0;
  z-index: 1;

`
export const Description = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-style: oblique;
  font-size: .75rem;
  font-weight: 300;
  padding: .5rem 0;
`
