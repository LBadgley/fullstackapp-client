import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route />
          <Route />
        </Switch>
      </Router>
    </>
  )
}
