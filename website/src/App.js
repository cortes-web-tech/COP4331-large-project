import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './background.png';
import Header from './components/layout/Header';

// Linked pages
import Authors from './components/pages/Authors';
import Demo from './components/pages/Demo';
import Contact from './components/pages/Contact';
import Start from './components/pages/Start';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (


      <Router>

      <div className="App">

        <Header/>



        <div style = {sectionStyle} className="container">
          <Route exact path="/start" component={Start}/>
          <Route exact path="/authors" component={Authors}/>
          <Route exact path="/demo" component={Demo}/>
          <Route exact path="/contact" component={Contact}/>

        </div>
      </div>

      </Router>
    );
  }
}

var sectionStyle = {
  flex: '1',
  width: "100%",
  color: "black",
  fontSize: "50px",
  height: "738px",
  backgroundImage: "url(" + Background +")"
}

export default App;
