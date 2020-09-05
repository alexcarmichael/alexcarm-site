import React from 'react';

import { HomePage } from './components/Homepage';
import { Projects } from './components/Projects';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/projects' component={Projects} />
          </Switch>
        </div>
      </Router>
    </AnimatePresence>
  );
};

export default App;
