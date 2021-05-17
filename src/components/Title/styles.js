import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 3rem;
  @media (min-width:768px){
    margin-bottom: 4rem;
  }
`

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  padding-bottom: .75rem;

  @media (min-width:768px){
    margin-bottom: 2rem;
    padding-bottom: 1rem;
  }

  position: relative;
  text-align: center;

  &:before {
    content:"";
    height: .2rem;
    background-color: ${(props) => props.color || props.theme.colors.primary};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0);
    width: 3rem;
  }
  ${(props) => props.noSegment && `
  
    &:before{
      content:"";
      display: none;
    }
  `};

`
