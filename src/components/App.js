import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from '../containers/Home';
// import Header from './Header';

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          {/* <Route path='/photo' /> */}
        </Switch>
      </Router>
    </>
  );
}
