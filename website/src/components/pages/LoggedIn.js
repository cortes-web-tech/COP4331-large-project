import React from 'react';
import {Link} from 'react-router-dom';
import './../../App.css';
import DashNav from './../layout/DashNav';
import Program from './Program'

class Logged extends React.Component{
  render(){
    return(
      <div style={loggedInStyle}>
        <DashNav />
        <React.Fragment>
            <div style={col}>
              <div> Refugees </div>
              <div> Parenting </div>
              <div> Domestic Violence/Sexual Assault </div>
            </div>

            <div style={col}>
              <div> Early Child Development </div>
              <div> Environmental Education </div>
              <div> Abortion Support </div>
            </div>

            <div style={col}>
              <div> <Link style={linkStyle} to="/program">Human Trafficking </Link></div>
              <div> Social Change </div>
              <div> Child Sexual Abuse </div>
            </div>
            <div style={col}>
              <div> Fatherhood </div>
              <div> Teen Pregnancy </div>
              <div> Care Coordination </div>
            </div>

        <br/>
        </React.Fragment>
      </div>
    )
  }
}


const loggedInStyle = {
  backgroundColor: "#cceeee",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
}

const col = {
  flexDirection: "column"
}

const linkStyle = {

}

export default Logged;
