import Ruby from "../components/Ruby";
const Mealant = () => {
    return <>
        <h2>Mealant</h2>
        <img src="https://www.tabling.co.kr/ssr/img/tabling-face-og.png" alt="mealant logo" />
        <h3>
            <Ruby text='이런 것들을 만들었어요' translation='I made these things.' />
        </h3>
        <p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ysst9vB_UG4?start=76" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </p>
        <ul>
            <li>
                <Ruby text='테이블링 매장용 API 개발' translation='Developed APIs for Tabling Stores' />
                </li>
            <li>
                <Ruby text='테이블링 파트너센터 프론트엔드 개발' translation='Developed Tabling Partner Center front-end' />
                </li>
            <li>
                <Ruby text='테이블링 고객용 API, 프론트엔드 개발 (현재 서비스 종료 및 모바일 앱 전환)' translation='Developed API, front-end for tabling customers (current service is terminated and converted to mobile app)' />
                </li>
            <li>
                <Ruby text='알림톡 및 문자 전송 서비스 개발' translation='Developed allimtalk and SMS service' />
                </li>
            <li>
                <Ruby text='테이블링 대기관리 앱 최초 제안 및 개발' translation='I first suggested tabling waiting management app and developed' />
                </li>
        </ul>
    </>
}

export default Mealant