import styled from "styled-components";

export const CanvasWrapper = styled.div`
  position: relative;
  canvas {
    height: 100vh;
    background-color: ${props => props.theme.colors.secondary};
  }
`

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  z-index: 2;
  color: white;
  cursor: pointer;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    color: ${props => props.theme.colors.primary};
  }
  svg {
    font-size: 2rem;
  }
`