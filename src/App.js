import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import Items from './components/Items/Items.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/items" component={Items}></Route>
      </Switch>
    </div>
  );
}

export default App;
