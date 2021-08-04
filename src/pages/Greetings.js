import styled from "styled-components";
import me from '../assets/IMG_2379.JPG';
import Ruby from "../components/Ruby";
import MainSection from "../components/MainSection";
const MainSectionWrapper = styled(MainSection)`
  text-align: center;
  opacity: 1;
`

const SlicedImage = styled.img`
  width: 12rem;
  height: 24rem;
  object-fit: cover;
  margin: 1rem;
`

const Greetings = () => {
    return (
        <MainSectionWrapper>
            <h1>
                <Ruby text='안녕하세요 😀' translation='Hello 😀' />
            </h1>
            <p>
                <Ruby text='저를 소개합니다.' translation='Let me introduce myself.' />
            </p>
            <div>
                <SlicedImage src={me} alt='me' />
                <SlicedImage src='https://media.istockphoto.com/photos/cool-cow-picture-id139890530?k=6&m=139890530&s=612x612&w=0&h=Fz5NpzZnfXOjePbDTLIJWlewq9qFSfKVcVGbJGHdvnY=' alt='cow' />
                <SlicedImage src='https://cdn.cashfeed.co.kr/attachments/94d04793e2.jpg' alt='dog' />
            </div>
        </MainSectionWrapper>
    );
}

export default Greetings;
