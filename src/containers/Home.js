import React, { Component } from 'react';
import styles from './Home.css';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  callApi() {
    fetch('http://localhost:7890/api/v1')
      .then(res => res.text())
      .then(res => this.setStart({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="Home" style={styles}>
        <header className="Home-header">
          <img src="logo" />
          <h1 className="App-title"> This is Photomaton </h1>
        </header>
        <div>
          <form>
            
          </form>
        </div>
        <p className="photoAlbum" />
      </div>
    );
  }
}
