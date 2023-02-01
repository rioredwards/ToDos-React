import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Auth from './components/Auth/Auth';
import { useUser } from './context/UserContext';
import { ItemsProvider } from './context/ItemsContext.js';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  const { user } = useUser();
  return (
    <>
      <Header />
      <Container className="mt-4">
        <Row className="d-flex justify-content-center">
          <Col sm={12} md={10} lg={8} className="bg-light text-dark border rounded p-3">
            <Switch>
              <Route path="/auth/:type" component={Auth} />
              <ItemsProvider>
                <Route path="/items" component={Items} />
              </ItemsProvider>
              <Route path="/">
                <>
                  {user && <Redirect to="/items" />}
                  {!user && <Redirect to="/auth/sign-in" />}
                </>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
