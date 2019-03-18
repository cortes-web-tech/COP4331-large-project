import React from 'react';
import {Link} from 'react-router-dom';
import './../../App.css';
import StayFocused from './../../stayFocused.png';

function NextLevelOrg(){
  return(
    <header className="nextLevelOrgContainer" style={nextLevelStyle}>
      <div style={boxStyle}>
        <h1 style={h1Style}>Take your <br/>oganization to <br/>the next level</h1>
        <p style={pStyle}>We are dedicated to help organizations like <br/>yours streamline all evaluation needs <br/>through one simple application for your <br/>program evaluation plans, logic model, data <br/>collection, and more.</p>
        <button type="button" style={buttonStyle}>Get Started</button>
      </div>
      <div style={boxStyle}>
        <img src={StayFocused} height="400" widt="400"/>
      </div>
    </header>
  )
}

const nextLevelStyle = {
  backgroundColor: 'white',
  display: 'flex'
}

const boxStyle = {
  flex:1,
  paddingTop:10,
  paddingBottom: 10
}

const h1Style = {
  color: '#F7921C',
  textAling: 'justify',

}

const pStyle = {
  color: '#717EBD'
}

const buttonStyle = {
  background: '#777777',
  color: '#ffffff',
  width:' 200px',
  height:'50px',
  borderRadius: '25px'
}
export default NextLevelOrg
