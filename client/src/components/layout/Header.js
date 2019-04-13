import React from 'react';
import {Link} from 'react-router-dom';
import './../../App.css';

export default function Header(){
  return(
    <header style={headerStyle}>
      <div style={logoStyle}>
        <Link style={h1Style} to="/">Keepu</Link>
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
  paddingTop: '2px'
}

const logoStyle = {
  flex: 2,
  paddingLeft: '20px',
}

const linksStyle = {
  display: 'flex',
  flexDirection: 'row',
  flex: 2,
  justifyContent: 'space-around',
  paddingRight: '20px'
}

const linkStyle = {

  color: 'white',
  textDecoration: 'none',
  fontSize: "20px",
}

const h1Style = {
  fontSize: "20px",
  color: 'white',
  // textDecoration: 'none',
  color: "white"
}
