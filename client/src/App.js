import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ViewPokemon from './pages/ViewPokemon';
import CreatePokemon from './pages/CreatePokemon';

function App() {
  return (
    
    <Router>
      <div className="App">
      <Switch>
          <Redirect from="/" to="/create" exact />
          <Route path="/create" component={CreatePokemon} exact />
          <Route path="/view" component={ViewPokemon} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
