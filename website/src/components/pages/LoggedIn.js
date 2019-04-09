import React from 'react';
import {Link} from 'react-router-dom';
import './../../App.css';
import DashNav from './../layout/DashNav';
import Program from './Program'

class Logged extends React.Component{
  render(){
    return(


      <div className="dashboard" style={loggedInStyle}>
        <DashNav />
        <React.Fragment>
            <div>
              <div>
                <h1>Overview</h1>
              </div>
              <div style = {boxLaout}>
                <div style={col}>
                  <div style={disabled}> Refugees </div>
                  <div style={enabled}> Parenting </div>
                  <div style={disabled}> Domestic Violence/Sexual Assault </div>
                </div>

                <div style={col}>
                  <div style={disabled}> Early Child Development </div>
                  <div style={disabled}> Environmental Education </div>
                  <div style={disabled}> Abortion Support </div>
                </div>

                <div style={col}>
                  <div style={enabled}><Link style={textColor} to="/program">Human Trafficking </Link></div>
                  <div style={disabled}> Social Change </div>
                  <div style={disabled}> Child Sexual Abuse </div>
                </div>
                <div style={col}>
                  <div style={disabled}> Fatherhood </div>
                  <div style={disabled}> Teen Pregnancy </div>
                  <div style={disabled}> Care Coordination </div>
                </div>
              </div>
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
  justifyContent: "space-between",
}

const boxLaout = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flex: 3
}

const col = {
  flexDirection: "column",
  flex: 1,

}

const textColor = {
  color:"white"
}
const enabled = {
  backgroundColor: "#EDA85F",
  borderRadius: "15px",
  height: "100px",
  margin: "10px",
  color: "white",
  textAlign: "center"
}

const disabled = {
backgroundColor: "#4D5CA2",
borderRadius: "15px",
height: "100px",
margin: "10px",
color: "#bbbbbb",
display: "flex",
textAlign: "center"
}

export default Logged;
