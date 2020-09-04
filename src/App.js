import React from 'react';

import { HomePage } from './components/Homepage';
import { Projects } from './components/Projects';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/projects' component={Projects} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
