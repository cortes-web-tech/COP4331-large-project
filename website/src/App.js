import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import NextLevelOrg from './components/layout/NextLevelOrg';
import WhyKeepu from './components/layout/WhyKeepu';
import Knots from './components/layout/Knots';
import Services from './components/layout/Services';

// Linked pages
import Authors from './components/pages/Authors';
import Demo from './components/pages/Demo';
import Contact from './components/pages/Contact';
import Start from './components/pages/Start';
import Keepu from './components/pages/Keepu';
import Login from './components/pages/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <div style={pageStyle}>
                <Route exact path="/" component={Keepu}/>
                <Route exact path="/start" component={Keepu}/>
                <Route exact path="/authors" component={Authors}/>
                <Route exact path="/demo" component={Demo}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/login" component={Login}/>
            </div>
            <div className="footerDiv">
              <Footer/>
            </div>
          </div>
        </Router>
      </div>


    );
  }
}

var pageStyle = {
  flex: '1',
  width: "100%",
  // color: "#f00fff",
  marginLeft: "auto",
  marginRight: "auto",
}


export default App;
