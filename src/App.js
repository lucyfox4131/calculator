import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Calculator">
          <div className="Equation-bar">
            <h3>Values of the calculator will go in here</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
