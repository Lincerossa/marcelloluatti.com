import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  display: block;
  height: 100%;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  transition: .1s all;
  box-shadow: 0 0 9.5px 0.5px rgba(0,0,0,.1);
  &:hover {
    box-shadow: 0 0 9.5px 0.5px rgba(0,0,0,.3)
  }
`

export const ImageWrapper = styled.div`
  position: relative;

  overflow: hidden;
  :before{
    content: "";
    position: absolute;
    background: linear-gradient(to top,rgba(0,0,0,.75),transparent);
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    z-index: 1;
    background: linear-gradient(to top,rgba(0,0,0,.75),transparent);
  }
  ${(props) => props.layout === 'auto' && `
    padding-top: 100%;
    img {
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
      object-fit: cover;
    }
  
  `}

`
export const Media = styled.img`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Supertitle = styled.div`
  font-family: sans-serif;
  color: white;
  font-weight: 100;
  font-size: .875rem;
  text-transform: uppercase;
  margin-bottom: .5rem;
`

export const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 100;
  line-height: 1;
  margin-bottom: .5rem;
  color: white;
`

export const Subtitle = styled.div`
  font-size: .75rem;
  color: white;
  font-weight: 100;
`

export const Description = styled.div`
  padding: 1rem;
  position: absolute;
  bottom: 0;
  color: white;
  z-index: 1;
`

export const TagsWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  letter-spacing: .04em;
`
export const Tag = styled.div`
  border-radius: 4px;
  color: white;
  font-size: .6rem;
  font-weight: 600;
  font-family: sans-serif;
  position: relative;
  margin-right: 1rem;

  text-transform: uppercase;
  &:after {
    content: "";
    position: absolute;
    top: 45%;
    transform: translate(0,-50%);
    border-radius: 50%;
    right: -.7rem;
    width: .4rem;
    height: .4rem;
    background: ${(props) => props.theme.colors.primary};
  }
`
