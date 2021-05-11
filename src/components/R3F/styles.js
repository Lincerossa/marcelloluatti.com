import styled from "styled-components";

export const CanvasWrapper = styled.div`
  canvas {
    height: 100vh;

  }
`
export const Title = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 2;
  font-size: 3rem;
  color: white;
  span {
    font-size: 3rem;
    color: ${props => props.theme.colors.primary};
  }
`