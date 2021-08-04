import styled from "styled-components";
import FadeIn from '../css/FadeIn'
import Ruby from "../components/Ruby";
const MainSection = styled.section`
    max-width: 1024px;
    ${FadeIn}
`

const Wrapper = styled.div`
    margin: 1rem;
`;

const Hobby = () => {
    return <MainSection>
        <div style={{ display: 'flex' }}>
            <img style={{ objectFit: 'cover' }} src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED" width="400" alt='rubiks cube' />
            <Wrapper>
                <h1>
                    <Ruby text="독서를 좋아합니다" translation="Reading Books" />
                </h1>
                <p>
                    <Ruby
                        text="책을 좋아합니다. 사실 책 읽는 것보다 책 자체를 좋아하는 것 같아요. 🙄"
                        translation="I like books. In fact, I think I like the book itself more than reading it. 🙄"
                    />
                </p>
                <p>
                    <h3>
                        <Ruby
                            text="올해 읽은 책들 (볼드 처리는 추천하는 책)"
                            translation="Books I've read this year (books recommended for bolding)"
                        />
                    </h3>
                    <ul>
                        <li><b>실용주의 사고와 학습</b></li>
                        <li>걸리버 여행기</li>
                        <li>동물 농장 (60%)</li>
                        <li>페스트</li>
                        <li>예민해서 힘들다면 심리학을 권합니다</li>
                        <li>설레지 않으면 버려라 (50%)</li>
                        <li>나의 하루는 4시 30분에 시작된다</li>
                        <li>무례한 사람에게 웃으며 대처하는 법</li>
                        <li>센서티브</li>
                        <li>90년생이 온다</li>
                        <li>프레임</li>
                        <li>일을 잘한다는것</li>
                        <li><b>일은 배신하지 않는다</b></li>
                        <li>오늘은 이만 좀 쉴게요</li>
                        <li>나는 나답게 살기로 했다</li>
                        <li><b>죽음의 수용소에서</b></li>
                    </ul>
                </p>
            </Wrapper>
        </div>
    </MainSection>
}

export default Hobby;