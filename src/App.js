import React from 'react';
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
        <Route path="/" component={Start}/>
      </Switch>
    </Router>
  );
}

export default App;
