import { Link, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import FadeIn from '../css/FadeIn'
import Creatrip from "./Creatrip";
import Mealant from "./Mealant";
import NGensoft from "./NGensoft";

const MainSection = styled.section`
    max-width: 1024px;
    ${FadeIn}
`

const Footprints = styled.ul`
    position: relative;    
    padding: 0;
    list-style: none;
    &:before {
        display: block;
        position: absolute;
        left: -1.5rem;
        content: '';
        width: 4px;
        height: 100%;
        background: black;
    }
    & > li {
        display: flex;
        align-items: center;
        margin: 2rem auto;
        &:before {
            position: absolute;
            z-index: 1;
            left: -2rem;
            content: '';
            width: 1rem;
            height: 1rem;
            border: 2px solid black;
            border-radius: 50%;
            background: white;
            transition: background 0.5s;
        }
        &.selected:before {
            background: green;
        }
    }
`;

const Article = styled.article`
    margin: 2rem;
    width: 40rem;
    min-height: 30rem;
`;

const footprints = [
    { path: '/footprint/ngensoft', title: '엔젠소프트', component: NGensoft },
    { path: '/footprint/mealant', title: '밀랑', component: Mealant },
    { path: '/footprint/creatrip', title: '크리에이트립', component: Creatrip },
]

const Footprint = () => {
    const location = useLocation()
    console.log(location)
    return (<MainSection>
        <div style={{ display: 'flex' }}>
            <div>
                <h1>발자취</h1>
                <Footprints>
                    {footprints.map(item => <li
                        key={item.path}
                        className={location.pathname === item.path ? 'selected' : ''}
                    >
                        <Link to={item.path}>{item.title}</Link>
                    </li>)}
                </Footprints>
            </div>
            <Article>
                <Route path='/footprint' exact render={() => <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F200F95274C39B4BE9E2019" alt="footprint" />} />
                {footprints.map(item => <Route key={item.path} path={item.path} component={item.component} />)}
            </Article>
        </div>
    </MainSection>)
}

export default Footprint