import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/items" component={Items}></Route>
        <Route exact path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
