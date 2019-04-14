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
import Signup from './components/pages/Signup';

import LoggedIn from './components/pages/LoggedIn';
import Program from './components/pages/Program';
import HelpCenter from './components/pages/HelpCenter';
import Settings from './components/pages/Settings';
import Knot1 from './components/knots/Knot1';
import Knot1p2 from './components/knots/Knot1p2';

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
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/loggedIn" component={LoggedIn}/>
                <Route exact path="/program" component={Program}/>
                <Route exact path="/knot1" component={Knot1}/>
                <Route exact path="/knot1p2" component={Knot1p2}/>
                <Route exact path="/helpCenter" component={HelpCenter}/>
                <Route exact path="/settings" component={Settings}/>

            </div>
            <div className="footerDiv">
              <div></div>
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
