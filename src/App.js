import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';

import './App.css';

function App() {
  return (
    <div id="bgGradient">
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path={`/:pokeId/stats`}>
            <Stats />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
