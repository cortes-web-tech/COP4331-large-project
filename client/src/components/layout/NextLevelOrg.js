import React from 'react';
import {Link} from 'react-router-dom';
import './../../App.css';
import StayFocused from './../../stayFocused.png';

function NextLevelOrg(){
  return(
    <header style={nextLevelStyle}>
      <div style={boxStyle}>
        <h1 style={h1Style}><b>Take your <br/>organization to <br/>the next level</b></h1>
        <p style={pStyle}><br/><br/>We are dedicated to help organizations like <br/>yours streamline all evaluation needs <br/>through one simple application for your <br/>program evaluation plans, logic model, data <br/>collection, and more.<br/><br/></p>
        <button type="button" style={buttonStyle}>Get Started</button>
      </div>
      <div style={boxStyle}>
        <img src={StayFocused} height="400" widt="400" style={pic}/>
      </div>
    </header>
  )
}

const pic = {
  height: 'auto',
  width: '100%'
}

const nextLevelStyle = {
  backgroundColor: 'white',
  display: 'flex',
    minHeight: '100vh'
}

const boxStyle = {
  flex:1,
  paddingTop:10,
  paddingBottom: 10,
  textAlign: 'left',
      fontSize: '1.4vw',
      overflow: 'hidden',
      marginLeft: '2em',
      marginRight: '2em',
      paddingLeft: '2em',
      paddingRight: '2em',
      marginTop: '4em',
}

const h1Style = {
  color: '#F7921C',
  textAling: 'justify',
  fontSize: '3vw'
}

const pStyle = {
  color: '#717EBD'
}

const buttonStyle = {
  background: '#777777',
  color: '#ffffff',
  width:' 200px',
  height:'50px',
  borderRadius: '25px',
  border: '0'
}
export default NextLevelOrg
