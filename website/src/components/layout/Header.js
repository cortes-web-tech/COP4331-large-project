import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return(
    <header style={headerStyle}>
    <h1><Link style={fontStyle} to="/">Keepu.</Link></h1>
     <Link style={linkStyle} to="/start">Get Started</Link> | <Link style={linkStyle} to="/authors">Our Authors</Link> | <Link style={linkStyle} to="/demo">Schedule A Demo</Link> | <Link style={linkStyle} to="/contact">Contact Us</Link>
    </header>
  )
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: "20px",
}

const headerStyle = {
  opacity: '1.0',
  // background: '#f6c9e8',
  height: "100px",
  color: '#ffffff',
  textAlign: 'center',
  padding: '10px',
  paddingBottom: "50px"
}

const fontStyle = {
  fontSize: "40px",
  color: 'white'
}



export default Header
