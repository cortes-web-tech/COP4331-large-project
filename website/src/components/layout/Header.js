import React from 'react';
import {Link} from 'react-router-dom';
import './../../App.css';

function Header(){
  return(
    <header className="headerContainer">
      <div className="headerLogo">
        <Link style={h1Style} to="/">Keepu.</Link>
      </div>
      <div className="headerLinks">
        <Link style={linkStyle} to="/start">Get Started</Link> | <Link style={linkStyle} to="/authors">Our Authors</Link> | <Link style={linkStyle} to="/demo">Schedule A Demo</Link> | <Link style={linkStyle} to="/contact">Contact Us</Link>
      </div>
    </header>
  )
}

const linkStyle = {
  color: 'black',
  textDecoration: 'none',
  fontSize: "20px",
}


const h1Style = {
  fontSize: "20px",
  color: 'black'
}



export default Header
