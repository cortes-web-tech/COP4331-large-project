import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './background.png';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Linked pages
import Authors from './components/pages/Authors';
import Demo from './components/pages/Demo';
import Contact from './components/pages/Contact';
import Start from './components/pages/Start';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (


      <Router>

      <div style={pageStyle} className="App">
        <Header/>
        <div style = {sectionStyle} className="container">
          <Route exact path="/start" component={Start}/>
          <Route exact path="/authors" component={Authors}/>
          <Route exact path="/demo" component={Demo}/>
          <Route exact path="/contact" component={Contact}/>
        </div>
        <Footer/>

      </div>



      </Router>
    );
  }
}

var pageStyle = {
  background: "#f6c9ff",
  height: "100%"
}

var sectionStyle = {
  flex: '1',
  width: "100%",
  color: "#f00fff",
  fontSize: "50px",
  height: "738px",
  backgroundImage: "url(" + Background +")",
  borderRadius: "50px"
}

export default App;
