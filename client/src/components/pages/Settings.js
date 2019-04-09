import React from 'react';
import {Link} from 'react-router-dom';
import './../../App.css';
import DashNav from './../layout/DashNav';


class Settings extends React.Component{
  render(){
    return(


      <div style={loggedInStyle}>
        <DashNav />
        <React.Fragment>
            <div>
                Settings
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

export default Settings;
