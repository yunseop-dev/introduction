import { CenteredMainSection as Wrapper } from '../components/MainSection'
import Ruby from '../components/Ruby'
import marriage from '../assets/20_HSY_3986.JPG'

const Marriage = () => {
    return <Wrapper>
        <h1><Ruby text="9월 4일에 결혼하는 새신랑입니다! 🤵👰‍♀️" translation="I am a bridegroom-to-be getting married on September 4th! 🤵👰‍♀️" /></h1>
        <p>
            <Ruby text="그런데 코로나 때문에 미룰지 말지 고민중이에요... 😥" translation="But I'm debating whether or not to postpone it because of Covid-19." />
            <div>
                <img src={marriage} width="400" alt="marriage" />
            </div>
        </p>
    </Wrapper>
}

export default Marriage