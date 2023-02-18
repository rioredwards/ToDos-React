import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import Auth from './components/Auth/Auth';
import { useUser } from './context/UserContext';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  const { user } = useUser();
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col sm={10} md={8} lg={6} className="bg-light text-dark border rounded px-3 py-4">
            <Switch>
              <Route exact path="/">
                <>
                  {user && <Redirect to="/todos" />}
                  {!user && <Redirect to="/auth/sign-in" />}
                </>
              </Route>
              <Route path="/auth/:type" component={Auth} />
              <Route path="/todos" component={Todos} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
