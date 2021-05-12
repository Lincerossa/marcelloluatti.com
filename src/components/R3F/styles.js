import styled from "styled-components";

export const CanvasWrapper = styled.div`
  position: relative;
  canvas {
    height: 100vh;
    background-color: ${props => props.theme.colors.secondary};
  }
`
