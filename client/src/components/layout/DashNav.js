import React from 'react';
import {Link} from 'react-router-dom';
import './../../App.css';

export default function DashNav(){
  return(
    <div>
      <div>
        <ul style={dashStyle}>
          <p>Keepu</p>
          <Link to="/start" style={bub}> Home</Link><br/>
          <Link to="/loggedIn" style={bub}> Dashboard</Link><br/>
          <Link to="/program" style={bub}> Program</Link><br/>
          <Link to="/helpCenter" style={bub}> Help Center</Link><br/>
          <Link to="/settings" style={bub}> Settings</Link>
        </ul>
      </div>
    </div>
  )
}

const dashStyle = {
  background: "#1F2E75",
  color: "white",
  padding: "8px",
  height: "400px"

}

const bub = {
  color: "white"

}
