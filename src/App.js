import styled from "styled-components";
import Greetings from "./pages/Greetings";
import About from "./pages/About";
import Residence from "./pages/Residence";
import { Route, useHistory, useLocation } from "react-router-dom";
import Footprint from "./pages/Footprint";
import Hobby from "./pages/Hobby";
import Book from "./pages/Book";
import Marriage from "./pages/Marriage";
import Welcome from "./pages/Welcome";
import { useEffect, useState } from "react";
import Quiz from "./pages/Quiz";

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

const routes = [
  { path: '/', component: Greetings, exact: true },
  { path: '/about', component: About },
  { path: '/residence', component: Residence },
  { path: '/footprint', component: Footprint },
  { path: '/hobby', component: Hobby },
  { path: '/book', component: Book },
  { path: '/marriage', component: Marriage },
  { path: '/welcome', component: Welcome },
  { path: '/quiz', component: Quiz },
]

const pages = ['/', '/about', '/residence', '/footprint', '/footprint/ngensoft', '/footprint/mealant', '/footprint/creatrip', '/hobby', '/book', '/marriage', '/welcome', '/quiz']

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(0)

  function movePage(position) {
    const page = pages?.[currentPage + position]
    if (page) {
      history.push(page)
    }
  }

  useEffect(() => {
    const event = (e) => {
      if (e.code === 'ArrowLeft') movePage(-1)
      if (e.code === 'ArrowRight') movePage(1)
    }
    window.addEventListener('keydown', event)
    return () => {
      window.removeEventListener('keydown', event)
    }
  })

  useEffect(() => {
    const page = pages.findIndex(page => page === location.pathname)
    setCurrentPage(page);
  })

  useEffect(() => {
    const page = pages.findIndex(page => page === location.pathname)
    setCurrentPage(page);
  }, [location])

  return (
    <Wrapper>
      {routes.map(page => <Route key={page.path} path={page.path} component={page.component} exact={page.exact} />)}
      <FixedBottomRight>
        <Button onClick={() => movePage(-1)}>◀️</Button>
        <Button onClick={() => movePage(1)}>▶️</Button>
      </FixedBottomRight>
    </Wrapper>
  );
}

export default App;
