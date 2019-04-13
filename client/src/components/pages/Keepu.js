import React from 'react';

import {Link} from 'react-router-dom';

import './../../App.css';
import Header from './../../components/layout/Header';
import Background from './../../background.png';

import NextLevelOrg from './../layout/NextLevelOrg';
import WhyKeepu from './../layout/WhyKeepu';
import Knots from './../layout/Knots';
import Services from './../layout/Services';

import LoggedIn from './LoggedIn'
import Login from './Login'


import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';


class Keepu extends React.Component {
render() {
  return(
  <div style={keepuContainer} className="App">
    <Header/>
    <div style={boxLayout}>

      <div style={upperBox}>
        <div style = {leftBox}>
        </div>
        <div style = {rightBox}>
        <b>Connect the<br/>knots and<br/>achieve results</b>
        </div>
      </div>

      <div style={lowerBox}>
        <div style = {leftBox}>
          <b>Program evaluation<br/>made simple</b>
        </div>

        <div style = {rightBox}>

          <Link to="/login">
          <button type="button" style={buttonStyle}>Get Started</button>

          </Link>

        </div>
      </div>
    </div>
    <div style = {pageStyle}>

    </div>
    <React.Fragment>
      <div>
        <div style={style}>
          <NextLevelOrg/>
          <WhyKeepu/>
          <Knots/>
          <Services/>
        </div>
      </div>
    </React.Fragment>
  </div>
  )
}
}
export default Keepu;

const style = {
  // fontSize: '20px',
  color: '#ffffff',
  textAlign: 'center',
  fontSize: '20px'
}

const keepuContainer = {
  backgroundImage: "url(" + Background + ")",
  // backgroundSize: 'cover',
  fontSize: '42px',
  textAlign: 'left',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  // opacity: '0.8',
  // background: 'black'
}

const boxLayout = {
  display: 'flex',
  flexDirection: 'column',
  color: 'white'
}
const upperBox = {
  paddingTop: '50px',
  paddingBottom: '100px',
  display: 'flex',
  flexDirection: 'row'
}

const lowerBox = {
  display: 'flex',
  flexDirection: 'row',
  paddingBottom: '50px'
}

const leftBox = {
  marginLeft: '30px',
  flex: 2
}

const rightBox = {
  flex: 1,
  fontSize: '150%'
}

const buttonStyle = {
  background: '#ffffff',
  width:' 270px',
  height: '50px',
  fontSize: '50%',
  borderRadius: '50px',
  border: 'none',
  color: '#707CB4'
}

const demoBtn1 = {
  background: '#ffffff',
    color: '#807bbd',
      width:' 115px',
      height:'35px',
      borderRadius: '50px',
      fontSize: '100%',
      border: 'none',
      cursor: 'pointer'
}

var pageStyle = {
  flex: '1',
  width: "100%",
  color: "#f00fff",
  fontSize: "50px",
  marginLeft: "auto",
  marginRight: "auto"
}
