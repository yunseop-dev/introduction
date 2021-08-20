import styled from "styled-components";

const Wrapper = styled.span``;
const Rb = styled.span``;
const Rt = styled.span`
    display: block;
    font-size: 50%;
`;

const Ruby = ({ text, translation }) =>
    <Wrapper>
        <Rb>{text}</Rb>
        <Rt>{translation}</Rt>
    </Wrapper>

export default Ruby