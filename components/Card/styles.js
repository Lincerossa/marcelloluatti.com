import styled from 'styled-components'


export const Card = styled.div`
  background-color: white;
  display: block;
  height: 100%;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 9.5px 0.5px rgba(0,0,0,.15)
  }
`


export const MediaWrapper = styled.div`
  position: relative;
  padding-top: 60%;
  overflow: hidden;
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
  color: #e74f30;
  font-size: .875rem;
  text-transform: uppercase;
  margin-bottom: .5rem;
`

export const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: .5rem;
`

export const Subtitle = styled.div`
  margin-bottom: .5rem;
  text-transform: uppercase;
  font-size: .75rem;
`

export const Content = styled.div`
  color: gray;
  font-size: .75rem;
  letter-spacing: .04em;
`
export const Description = styled.div`
  padding: 1rem;
`
