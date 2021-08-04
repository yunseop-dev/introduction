import { css } from "styled-components";

const SweepToTheRight = css`
    transform: scaleX(1);
    transform-origin: 0% 100%;
    opacity: 1;
    animation-name: SweepToTheRight;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.3s;

    @keyframes SweepToTheRight {
        0% {
            transform: scaleX(0);
        }
        100% {
            transform: scaleX(1);
        }
    }
`;

export default SweepToTheRight;