import Ruby from "../components/Ruby";
const Creatrip = () => {
    return <>
        <h2>Creatrip</h2>
        <img src="https://www.creatrip.com/creatrip-icons/image-logo.svg" alt="creatrip logo" />
        <h3>
            <Ruby text='이런 것들을 만들었어요' translation='I made these things.' />
        </h3>
        <ul>
            <li>
                <Ruby text={
                    <><a href="https://www.creatrip.com" target="_blank" rel="noreferrer">크리에이트립 웹사이트</a> 개발 (MAU 170만, 코로나 이전)</>
                } translation={
                    <>Developed <a href="https://www.creatrip.com" target="_blank" rel="noreferrer">Creatrip website</a> (MAU 1.7 million, before Corona)</>
                } />
            </li>
            <li>
                <Ruby text={
                    <><a href="https://www.creatrip.com/purchase/all" target="_blank" rel="noreferrer">크리에이트립 직구 사이트</a> 개발</>
                } translation={
                    <>Developed <a href="https://www.creatrip.com/purchase/all" target="_blank" rel="noreferrer">Creatrip proxy shopping site</a></>
                } />
            </li>
            <li>
                <Ruby text='프론트엔드 전반 구조 설계 및 와이어 프레임 구축' translation='I designed the overall front-end structural design and built the wireframe.' />
            </li>
            <li>
                <Ruby text='블로그, 예약, 마이페이지, 직구, 검색 등 세부 기능 구현' translation='Implemented detailed functions such as blog, reservation, my page, direct purchase, and search' />
            </li>
            <li>
                <Ruby text='SSR 구현 및 SEO 최적화: 구글 검색 트래픽 향상' translation='Implemented SSR and Optimizing SEO: Boost Your Google Search Traffic' />
            </li>
            <li>
                <Ruby text='Localization script 개발로 5개국어 지원 (대만, 홍콩, 태국, 영어, 베트남어)' translation='developed 5 languages supported by localization script (Taiwan, Hong Kong, Thailand, English, Vietnamese)' />
            </li>
            <li>
                <Ruby text='초기 로딩속도 개선: 구글 지도 iframe을 png로 변환, 이미지 레이지 로딩 적용, CSS 코드 개선 등으로 Performance Rate 평균 35점 이상 향상.' translation='Initial loading speed improvement: Performance rate improved by more than 35 points on average by converting Google Maps iframe to png, applying image lazy loading, and improving CSS code.' />
            </li>
            <li>
                <Ruby text='레거시 API 제거' translation='Remove legacy APIs' />
            </li>
        </ul>
    </>
}

export default Creatrip