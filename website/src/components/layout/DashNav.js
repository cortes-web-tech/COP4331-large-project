import React from 'react';
import {Link} from 'react-router-dom';
import './../../App.css';

export default function DashNav(){
  return(
    <div>
      <div>
        <ul style={linkStyle}>
          <li style={bub}> Keepu</li>
          <li style={bub}> Home</li>
          <li style={bub}> Dashboard</li>
          <li style={bub}> Program</li>
          <li style={bub}> Help Center</li>
          <li style={bub}> Settings</li>
        </ul>
      </div>
    </div>
  )
}

const linkStyle = {
  textDecoration: "none",

}

const bub = {
  background: "#007bff",
  textDecoration: "none"
}
