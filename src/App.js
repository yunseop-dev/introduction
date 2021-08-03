import styled from "styled-components";
import Greetings from "./pages/Greetings";
import About from "./pages/About";
import { Route, useHistory, useLocation } from "react-router-dom";
import Footprint from "./pages/Footprint";
import Hobby from "./pages/Hobby";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const FixedBottomRight = styled.section`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
`

const Button = styled.button`
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: 1px solid;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #efefef;
  }
`

const pages = [
  { path: '/', component: Greetings, exact: true },
  { path: '/about', component: About },
  { path: '/footprint', component: Footprint },
  { path: '/hobby', component: Hobby },
]

const App = () => {
  const history = useHistory();
  const location = useLocation();
  function movePage(to) {
    const current = pages.findIndex(page => page.path === location.pathname)
    const path = pages?.[current + to]?.path
    if (path) history.push(path)
  }
  return (
    <Wrapper>
      {pages.map(page => <Route key={page.path} path={page.path} component={page.component} exact={page.exact} />)}
      <FixedBottomRight>
        <Button onClick={() => movePage(-1)}>◀️</Button>
        <Button onClick={() => movePage(1)}>▶️</Button>
      </FixedBottomRight>
    </Wrapper>
  );
}

export default App;
