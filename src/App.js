import React from 'react';
import NavBar from './navBar';
import './home.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './vape_guide_v2/src/pages/home';
import Beginner from './vape_guide_v2/src/pages/begginer';
import IntermediateR from './pages/intermediate';

function App() {
  return (
    <Router>
      <>
        <div className="nav">
          <NavBar />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/vape_guide_v2/src/pages/begginer">
              <Beginner />
            </Route>
            <Route path="./intermediate">
              <IntermediateR />
            </Route>
            <Route path="./pages/expert">
              <Expert />
            </Route>
            <Route path="/calculator">
              <Beginner />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
