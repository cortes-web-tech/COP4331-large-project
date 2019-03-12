import React , { Component } from 'react';
import Background from '../../background.png';
import './Login.css';

class Start extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={login}>
          <div class="loginContainer">
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Start;

const login = {
  backgroundColor: '#EEEEEE',
  width: "100%",
  color: "#f00fff",
  fontSize: "50px",
  marginLeft: "auto",
  marginRight: "auto",
   height: "100%",

  backgroundSize: "cover"
}
