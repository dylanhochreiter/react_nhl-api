import React, { Component } from 'react';
import Teams from './Components/teams';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NHL React Application</h1>
        <div id="teams">
          <h2>Teams</h2>
          <p>Select a team to see players for that team and their stats:</p>
          <Teams />
        </div>
        <div>
          <h2>Players</h2>
          <p>Below, players of the above selected team are displayed with stats and information.</p>
        </div>
      </div>
    );
  }
}

export default App;
