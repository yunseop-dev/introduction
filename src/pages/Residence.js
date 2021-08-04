import MainSection from "../components/MainSection"
import Wrapper from "../components/MarginedDiv";

const Residence = () => {
    return <MainSection>
        <div style={{ display: 'flex' }}>
            <img src="https://blog.kakaocdn.net/dn/xdiLM/btq9ymO2TtM/bks3himIpZFfrzaXT8TgjK/img.jpg" alt="곱창" width="400" />
            <Wrapper as="article">
                <h1>사는 곳</h1>
                <p>왕십리 곱창골목 근처에 살아요. JTBC에서 하는 관찰예능인 '해방타운'에서 장윤정과 윤혜진이 배달시켜먹은 그 곱창집이 저희 집에서 5분거리에 있답니다. 🐷</p>
                <p>이곳에 살면서 도장깨기 하듯 곱창골목의 곱창집들을 정복하는게 목표에요. 🙈</p>
            </Wrapper>
        </div>
    </MainSection>
}

export default Residence