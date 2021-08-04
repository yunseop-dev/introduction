import styled from 'styled-components'
import { useState } from 'react'

const Wrapper = styled.div`
    border-radius: 1rem;
    border: 1px solid #e6e6e6;
    margin: 1rem auto;
    padding: 1rem;
    cursor: pointer;
`

const Blind = styled.span`
    transition: background 1s;
    background: ${(props) => props.isAppeared ? '' : 'black'};
`

const BlindQuiz = ({ text, answer }) => {
    const [isAppeared, setIsAppeared] = useState(false);
    const quiz = text.split(answer);
    const toggle = () => {
        setIsAppeared(val => !val)
    }
    return <Wrapper onClick={toggle}>
        {quiz[0]}<Blind isAppeared={isAppeared}>{answer}</Blind>{quiz[1]}
    </Wrapper>
}

export default BlindQuiz;