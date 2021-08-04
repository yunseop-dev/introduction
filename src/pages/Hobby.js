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
            <img style={{ objectFit: 'cover' }} src="https://static1.squarespace.com/static/5943b11db3db2be040e6fa54/5948dd26b3db2b68019f818c/5e77192096c2552a3b6cbd97/1584863729217/rubik%27s+cube.jpg?format=1500w" width="400" alt='rubiks cube' />
            <Wrapper>
                <h1>
                    <Ruby text="취미" translation="Hobby" />
                </h1>
                <p>
                    <Ruby
                        text="루빅스 큐브 맞추기가 취미입니다. 큐브를 빠르게 맞춘다는 뜻인 '스피드 큐빙'을 즐겨했습니다. 최고 기록은 18초까지도 나왔어요. 😎"
                        translation="My hobby is solving Rubik's Cube. I enjoyed 'speed cubing', which means to solve the cube quickly. My best record was 18 seconds. 😎"
                    />
                </p>
                <p>
                    <Ruby
                        text="요즘은 즐겨하지는 않지만, 여전히 1분 이내로 맞출 수 있어요."
                        translation="I don't enjoy it these days, but I can still get it done in less than a minute."
                    />
                </p>
            </Wrapper>
        </div>
    </MainSection>
}

export default Hobby;