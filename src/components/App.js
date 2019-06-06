import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  // Route
} from 'react-router-dom';
// import { Home } from '../containers/Home';
// import PhotoAlbum from '../containers/PhotoAlbum';

// import Header from './Header';

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Switch>
          {/* <Route exact path='/' component={Home}/> */}
          {/* <Route path='/photoUrl' component={PhotoDetail} /> */}
        </Switch>
      </Router>
    </>
  );
}
