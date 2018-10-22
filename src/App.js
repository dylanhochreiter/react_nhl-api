import React, { Component } from 'react';
import Teams from './Components/teams';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Teams />
      </div>
    );
  }
}

export default App;
