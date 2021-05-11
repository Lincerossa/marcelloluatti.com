import styled from "styled-components"


function getScaleValue({mouseStatus, mousePosition}){

  const { x, y } = mousePosition

  if(x <= 0 || y <= 0 || !x || !y || isNaN(x) || isNaN(y)) return 'scale(0)'

  if(mouseStatus === "mousedown") return 'scale(.4)'

  return 'scale(1)'
}

export const MagicMouseWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  display: none;
  @media (min-width: 768px){
    display: block;
    pointer-events: none;
  }
`

export const MagicMouse = styled.div.attrs(props => ({
  style: {
    top: props.mousePosition && props.mousePosition.y -25,
    left: props.mousePosition && props.mousePosition.x -25,
    width: "50px",
    height:"50px",
    transform: getScaleValue(props),
    background: props.mouseStatus === "mousedown" ? props.theme.colors.primary : "transparent",
    transition: "transform .3s",
  },
}))`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.primary};
  transform: translate(-50%,-50%);
  color: white;
  top: 0;
  left: 0;
  @media (min-width: 768px){
    pointer-events: none;
  }

`