import { css } from "styled-components";

const Wobble = css`
    animation-name: wobble;
    animation-iteration-count: 1;    
    animation-duration: 1s;
    animation-fill-mode: both;
    
    @keyframes wobble {
        0% {
            transform: none
        }
        15% {
            transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)
        }
        30% {
            transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)
        }
        45% {
            transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)
        }
        60% {
            transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)
        }
        75% {
            transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)
        }
        100% {
            transform: none
        }
    }
`;

export default Wobble;
