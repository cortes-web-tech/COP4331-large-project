import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './background.png';

class App extends Component {
  render() {
    return (

      <div className="App">
        <div style={sectionStyle}>

        </div>
      </div>
    );
  }
}

var sectionStyle = {
  flex: 1,
  width: "100%",
  height: "738px",
  backgroundImage: "url(" + Background +")"
}

export default App;
