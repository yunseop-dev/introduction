import {CenteredMainSection as Wrapper} from '../components/MainSection'
import Ruby from '../components/Ruby'
import marriage from '../assets/20_HSY_3986.JPG'

const Marriage = () => {
    return <Wrapper>
        <h1><Ruby text="9월 4일에 결혼하는 새신랑입니다! 🤵👰‍♀️" translation="I am a bridegroom-to-be getting married on September 4th! 🤵👰‍♀️" /></h1>
        <p>
            <img src={marriage} width="400" alt="marriage" />
        </p>
    </Wrapper>
}

export default Marriage