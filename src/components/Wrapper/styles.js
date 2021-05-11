import styled from 'styled-components'

const SIZES = {
  small: 200,
  regular: 500,
  big: 900,
  large: 1220
}

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  ${(props) => props.hasPadding && 'padding: 0 1rem'};
  max-width: ${props => `${SIZES[props.size]}px`};
`