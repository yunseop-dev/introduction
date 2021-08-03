import styled from "styled-components";
import FadeIn from '../css/FadeIn'
import techStacks from "../constants/techStacks";
import Ruby from "../components/Ruby";
import me from '../assets/IMG_1316.JPG'
const MainSection = styled.section`
    max-width: 1024px;
    ${FadeIn}
`
const TechStackList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
`
const TechStackItem = styled.li`
    display: inline-block;
    margin: 0.1rem;
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
`

const Wrapper = styled.div`
    margin: 1rem;
`;

const About = () => {
    return <MainSection>
        <div style={{ display: 'flex' }}>
            <img style={{ objectFit: 'cover' }} src={me} width="400" alt='me' />
            <Wrapper>
                <h1>
                    <Ruby text='저는요...' translation='About me...' />
                </h1>
                <ul>
                    <li>
                        <Ruby text='김윤섭' translation='Yunseop Kim' />
                    </li>
                    <li>
                        <a href="tel:+821041318560">010-4131-8560</a>
                    </li>
                    <li>
                        <a href="mailto:c.o.d.e@kakao.com">c.o.d.e@kakao.com</a>
                    </li>
                    <li>
                        <Ruby text='6년차 프론트엔드 개발자' translation='Frontend Developer who has been working for 6 years' />
                    </li>
                    <li>
                        <Ruby text='요새 관심 갖는 분야는 소프트웨어 학습 및 교육입니다.' translation='My current interest is software learning and education.' />
                    </li>
                    <li><a href='https://stackshare.io/yunseop-dev' target="_blank">StackShare</a></li>
                    <li><a href='https://devtimothy.tistory.com' target="_blank"><Ruby text='블로그' translation='Blog' /></a></li>
                    <li><a href='https://www.facebook.com/frontendmastery' target="_blank">
                        <Ruby text='프론트엔드 마스터리 (운영중인 페이스북 페이지)' translation='Frontend Mastery (Facebook Page what I operate)' />
                    </a></li>
                </ul>
                <h3>Tech Stacks</h3>
                <TechStackList>
                    {techStacks.map(stack => <TechStackItem>
                        <img src={stack} width='30' height='30' />
                    </TechStackItem>)}
                </TechStackList>
            </Wrapper>
        </div>
    </MainSection>
}

export default About;