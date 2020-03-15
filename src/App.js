import React from 'react';
import logo from './logo.svg';
import './App.css';

import Start from './components/Start';
import Area from './components/Area';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/area/:postcode" component={Area}/>
        <Route path="/">
          <Start/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
