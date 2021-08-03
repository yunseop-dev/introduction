import styled from "styled-components";

const Wrapper = styled.ruby`
    ruby-position: under;
    & > rt {
        text-align: left;
    }
`;

const Ruby = ({ text, translation }) =>
    <Wrapper>
        <rb>{text}</rb>
        <rt>{translation}</rt>
    </Wrapper>

export default Ruby