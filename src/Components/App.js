import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Articles from './Articles';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Router>
        <div>
          <nav>
          <NavBar />
          </nav>
          <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path='/articles/:id' component={Articles} />
          <Redirect to='/home' />
          </Switch>
        </div>
      </Router>
    </header>
  </div>
);

export default App;
