import Ruby from '../components/Ruby'
const Creatrip = () => {
    return <>
        <h2>Creatrip</h2>
        <p>
            <Ruby
                text='이곳에 처음 와서는 레거시 때문에 많은 고생을 했어요. <유지보수하기 어렵게 코딩하는 방법> 이라는 책에 나와있는 사례들이 프로젝트 전반에 걸쳐 녹아있었죠. 레거시를 걷어내는 일부터 시작해서, 소프트웨어가 생명주기를 다하고 새로운 한 바퀴를 돌기까지의 전반적인 경험을 했어요.'
                translation='When I first came here, I struggled a lot with the legacy. Cases from the book <How to Coding Hard to Maintain> were incorporated throughout the project. From kicking off the legacy, we went through the whole experience until the software came to the end of its lifecycle and went through a new cycle.'
            />
        </p>
        <p>
            <Ruby
                text='프론트엔드 개발자로서 엔드유저들에게 웹 사이트가 도달하기까지, 어떤 고민을 해야하는지를 배울 수 있었어요.'
                translation='As a front-end developer, I was able to learn what to think about before a website reaches end users.'
            />
        </p>
        <h3>이런 것들을 만들었어요</h3>
        <ul>
            <li>크리에이트립 웹 개발 (MAU 180만)</li>
            <li>크리에이트립 직구 페이지 개발</li>
        </ul>
    </>
}

export default Creatrip