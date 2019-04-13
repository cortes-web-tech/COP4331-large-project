import React from 'react';
import {Link} from 'react-router-dom';
import './../../App.css';
import Logo from './../../logo.png';

export default function Header(){
  return(
    <header style={headerStyle}>
      <div style={logoStyle}>
      <img src={Logo} style={pic}/>
        <Link style={h1Style} to="/">KEEPU</Link>
      </div>
      <div style={linksStyle}>
        <div><Link style={linkStyle} to="/login">Get Started </Link></div>
        <div><Link style={linkStyle} to="/authors">Our Authors </Link></div>
        <div><Link style={linkStyle} to="/demo">Schedule A Demo </Link></div>
      </div>
    </header>
  )
}

// Styling stuff
const headerStyle = {
  display: 'flex',
  flexDirection: 'row',
  color: '#ffffff',
  paddingTop: '0.5em'
}

const logoStyle = {
  flex: 2,
  paddingLeft: '20px',
}

const pic = {

}
const linksStyle = {
  display: 'flex',
  flexDirection: 'row',
  flex: 2,
  justifyContent: 'space-around',
  paddingRight: '20px',
  fontWeight: 'bold'
}

const linkStyle = {

  color: 'white',
  textDecoration: 'none',
  fontSize: "20px",
}

const h1Style = {
  fontSize: "1em",
  color: 'white',
  // textDecoration: 'none',
  color: "white",
  paddingLeft: '0.5em',
  fontWeight: 'bold'
}
