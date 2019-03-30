import React from 'react'
import './../../App.css';
import Header from './../../components/layout/Header';
import Background from './../../background.png';

import NextLevelOrg from './../layout/NextLevelOrg';
import WhyKeepu from './../layout/WhyKeepu';
import Knots from './../layout/Knots';
import Services from './../layout/Services';

export default function Keepu(){
  return(
  <div style={keepuContainer} className="App">
    <Header/>
    <div style={boxLayout}>

      <div style={upperBox}>
        <div style = {leftBox}>
        </div>
        <div style = {rightBox}>
        Connect the<br/>knots and<br/>achieve results
        </div>
      </div>

      <div style={lowerBox}>
        <div style = {leftBox}>
          Program evaluation<br/>made simple
        </div>

        <div style = {rightBox}>
          <button type="button" style={buttonStyle}>Get Started</button>
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
  paddingBottom: '220px',
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
  flex: 1
}

const buttonStyle = {
  background: '#ffffff',
  width:' 300px',
  fontSize: '32px',
  borderRadius: '25px'
}

var pageStyle = {
  flex: '1',
  width: "100%",
  color: "#f00fff",
  fontSize: "50px",
  marginLeft: "auto",
  marginRight: "auto"
}
