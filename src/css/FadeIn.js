import { css } from "styled-components";

const FadeIn = css`
opacity: 1;
animation-name: fadeInOpacity;
animation-iteration-count: 1;
animation-timing-function: ease-in;
animation-duration: 2s;

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`

export default FadeIn