const Creatrip = () => {
    return <>
        <h2>Creatrip</h2>
        {/* <p>
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
        </p> */}
        <img src="https://www.creatrip.com/creatrip-icons/image-logo.svg" alt="creatrip logo" />
        <h3>이런 것들을 했어요</h3>
        <p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/x6e20tomSW8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </p>
        <ul>
            <li>
                <a href="https://www.creatrip.com" target="_blank" rel="noreferrer">크리에이트립 웹페이지</a> 개발 (MAU 170만, 코로나 이전)
            </li>
            <li>
                <a href="https://www.creatrip.com/purchase/all" target="_blank" rel="noreferrer">크리에이트립 직구 페이지</a> 개발
            </li>
            <li>프론트엔드 전반 구조 설계 및 와이어 프레임 구축</li>
            <li>블로그, 예약, 마이페이지, 직구, 검색 등 세부 기능 구현</li>
            <li>SSR 구현 및 SEO 최적화: 구글 검색 트래픽 향상</li>
            <li>Localization script 개발로 5개국어 지원 (대만, 홍콩, 태국, 영어, 베트남어)</li>
            <li>재사용 가능한 컴포넌트 자체 제작 (SCSS)</li>
            <li>초기 로딩속도 개선: 구글 지도 iframe을 png로 변환, 이미지 레이지 로딩 적용, CSS 코드 개선 등으로 Performance Rate 평균 35점 이상 향상.</li>
            <li>레거시 API 제거</li>
        </ul>
    </>
}

export default Creatrip