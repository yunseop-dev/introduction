import MainSection from '../components/MainSection'
import BlindQuiz from '../components/BlindQuiz'

const Quiz = () => {
    return <MainSection>
        <h1>Quiz</h1>
        <BlindQuiz text="MBTI는 ISTJ이다." answer="ISTJ" />
        <BlindQuiz text="소프트웨어 학습 및 교육에 관심이 있다." answer="학습 및 교육" />
        <BlindQuiz text="왕십리 곱창골목 근처에 거주한다." answer="곱창골목" />
        <BlindQuiz text="테이블링이라는 음식점 예약 및 대기관리 서비스를 만들었다." answer="테이블링" />
        <BlindQuiz text="큐브 맞추기가 취미이다." answer="큐브 맞추기" />
        <BlindQuiz text="⭐️9월 4일에 결혼한다.⭐️" answer="9월 4일" />
    </MainSection>
}

export default Quiz;