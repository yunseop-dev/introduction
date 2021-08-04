import styled from "styled-components";
import marriage from '../assets/20_HSY_3986.JPG'
const Wrapper = styled.section`
    text-align: center;
`

const Marriage = () => {
    return <Wrapper>
        <h1>9월 4일에 결혼하는 새신랑입니다 🤵👰‍♀️</h1>
        <p>
            <img src={marriage} width="400" alt="welcome" />
        </p>
    </Wrapper>
}

export default Marriage