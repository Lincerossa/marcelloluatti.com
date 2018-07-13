import styled from "styled-components";

export const Sky = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.background};
  position: ${props => props.fixed ? 'fixed' : 'relative'};
  top: 0;
  z-index: -1;
`;

export const Star = styled.div`
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  width: ${props => props.dimension};
  height: ${props => props.dimension};
  border-radius: 50%;
  background-color: ${props => props.color};
  
`;

export const Space = styled.div`
  margin-top: 100vh;
`

export const Title = styled.div`
  position: absolute;
  bottom: 20%;
  left: 4rem;
  color: white;
  font-size: 2rem;
  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`
