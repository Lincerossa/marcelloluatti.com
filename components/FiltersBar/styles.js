import styled from 'styled-components'

export const FiltersBarWrapper = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.dark};
  padding: 1rem;
  margin-bottom: 1rem;
  input {
    outline: none;
    width: 100%;
    margin: 0;
    font-size: .75rem;
    letter-spacing: .04em;
    padding: .5rem;
    padding-right: 2.25rem;
    font-family: sans-serif;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;  
    border: none;
    -webkit-appearance: none;
  }
`

export const InputInner = styled.div`
  position: relative;
  
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 300px;
  }
`

export const LoadingWrapper = styled.div`
  position: absolute;
  right: .5rem;
  top: 0;
  bottom: 0;

`