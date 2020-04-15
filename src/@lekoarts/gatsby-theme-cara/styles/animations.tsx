import { keyframes, css } from "@emotion/core"
import styled from "@emotion/styled"


const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`

const up = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(90px);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
    
    transform-origin: center;
  }
  to {
    transform: rotate(359deg);
    
    transform-origin: center;
  }
`

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`

const upAnimation = css`
  ${up} 6s ease-in infinite alternate;
`

const rotateAnimation = css`
  ${rotate} 5s infinite linear;
`

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Up = styled.div`
  animation: ${upAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
export const Rotate = styled.div`
animation: ${rotateAnimation};
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;

`
