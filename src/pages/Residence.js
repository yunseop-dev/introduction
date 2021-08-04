import MainSection from "../components/MainSection"
import Ruby from "../components/Ruby"
import Wrapper from "../components/MarginedDiv";

const Residence = () => {
    return <MainSection>
        <div style={{ display: 'flex' }}>
            <img src="https://blog.kakaocdn.net/dn/xdiLM/btq9ymO2TtM/bks3himIpZFfrzaXT8TgjK/img.jpg" alt="곱창" width="400" />
            <Wrapper as="article">
                <h1>
                    <Ruby text="사는 곳" translation="Where I live" />
                </h1>
                <p>
                    <Ruby text="" translation="" />
                    <Ruby
                        text="왕십리 곱창골목 근처에 살아요. JTBC에서 하는 관찰예능인 '해방타운'에서 장윤정과 윤혜진이 배달시켜먹은 그 곱창집이 저희 집에서 5분거리에 있답니다. 🐷"
                        translation="I live near the 곱창 골목 in Wangsimni. The Gopchang restaurant that Jang Yun-jeong and Yoon Hye-jin delivered in 'Liberation Town', an observational entertainment show on JTBC, is 5 minutes away from our house. 🐷"
                    />
                </p>
                <p>
                    <Ruby
                        text="이곳에 살면서 도장깨기 하듯 곱창골목의 곱창집들을 정복하는게 목표에요. 🙈"
                        translation="The goal is to conquer the restuarants in the 곱창 골목 as if living here. 🙈"
                    />
                </p>
            </Wrapper>
        </div>
    </MainSection>
}

export default Residence