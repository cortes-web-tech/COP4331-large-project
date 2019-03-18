import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './background.png';
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
import Login from './components/pages/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={pageLayout} className="App">

          <div className="headerDiv">
            <Header/>
          </div>

        <div style={pageStyle} className="displayPage">
            <Route exact path="/"/>
            <Route exact path="/start" component={Start}/>
            <Route exact path="/authors" component={Authors}/>
            <Route exact path="/demo" component={Demo}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/login" component={Login}/>
        </div>

        <div>
          <NextLevelOrg/>
          <WhyKeepu/>
          <Knots/>
          <Services/>
        </div>
        <div className="footerDiv">
          <Footer/>
        </div>
        </div>
      </Router>



    );
  }
}

var pageLayout = {
  // height: "100%",
  height: "auto",
  // background: "black",

}

var pageStyle = {
  // flex: '1',
  width: "100%",
  color: "#f00fff",
  fontSize: "50px",
  marginLeft: "auto",
  marginRight: "auto",

  backgroundSize: "cover"
}


export default App;
