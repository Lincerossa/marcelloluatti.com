import styled from 'styled-components'

export const TextDistortion = styled.div`
  display: inline-block;
  --gap-horizontal: 15px;
  --time-anim: 4s;
  animation-name: glitch-anim-text;
  animation-duration: var(--time-anim);
  animation-timing-function: linear;
  animation-iteration-count: infinite;


  @keyframes glitch-anim-text {
    0% { 
      transform: translate3d(calc(-1 * var(--gap-horizontal)),0,0) scale3d(-1,-1,1);
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
      clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    }
    2% {
      -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
      clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    }
    4% {
      -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
      clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    }
    5% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
      clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    }
    6% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
      clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    }
    7% {
      -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
      clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    }
    8% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
      clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    }
    9% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
      clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    }
    9.9% {
      transform: translate3d(calc(-1 * var(--gap-horizontal)),0,0) scale3d(-1,-1,1);
    }
    10%, 100% {
      transform: translate3d(0,0,0) scale3d(1,1,1);
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
`