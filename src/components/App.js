import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
// import PhotoAlbum from '../containers/PhotoAlbum';
import PhotoDetail from '../components/photos/PhotoDetails';

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Switch>
          <Route exact path='/' component={HomeContainer}/>
          <Route path='/photoUrl' component={PhotoDetail} />
        </Switch>
      </Router>
    </>
  );
}
