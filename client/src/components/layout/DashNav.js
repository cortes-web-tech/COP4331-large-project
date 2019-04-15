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
          <Link to="/start" style={bub}> Logout</Link>
        </ul>
      </div>
    </div>
  )
}

const dashStyle = {
  background: "#1F2E75",
  color: "white",
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  height: "100vh"


}

const bub = {
  color: "white"

}
