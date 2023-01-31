import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Auth from './components/Auth/Auth';
import { useUser } from './context/UserContext';

function App() {
  const { user } = useUser();
  console.log('user', user);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/items" component={Items} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/items" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
