import styled from "styled-components";
import FadeIn from '../css/FadeIn'
import SweepToTheRight from '../css/SweepToTheRight'
import Wobble from "../css/Wobble";
import sample from '../functions/sample'

const MainSection = styled.section`
    max-width: 1024px;
    ${() => sample([FadeIn, SweepToTheRight, Wobble])}
`

export const CenteredMainSection = styled(MainSection)`
    text-align: center;
`

export default MainSection;