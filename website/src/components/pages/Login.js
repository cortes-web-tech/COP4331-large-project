import React , { Component } from 'react';
import Background from '../../background.png';
import './Login.css';

class Start extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={login}>
          <div class="loginContainer">
            <div class="loginBox2"></div>
            <div class="loginBox1">
              <h1 id="greet"><b>Good to see you<br />again!<br /><br /></b></h1>

              <form name="login" action="">
                <label class="label">
                  <span class="field"><b>Email</b></span>
                  <input type="email" name="email" placeholder="Your email address" maxlength="30"/>
                </label>

                <div class="label">
                  <span class="field"><b>Password</b></span>
                  <input type="password" name="password" class="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" maxlength="30"/>
                  <a href="#" class="loginLinks"><br />Forgot password?<br /></a>
                  <button type="button" style={loginBtn}>Sign In</button>
                  <a href="#" class="loginLinks"><br />New to our Service?<br />Sign up!<br /></a>
                </div>




              </form>




              {/*<p class="loginForm"><b>Email address</b></p>
              <input class="loginInput" type="email" id="email" placeholder="Your email address" maxlength="30" />
              <p class="loginForm"><b>Password</b></p>
              <input class="loginInput" type="password" id="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"/>
              <a href="#" class="loginLinks"><br />Forgot password?Click here.<br /></a>
              <button type="button" style={loginBtn}>Sign In</button>
              <a href="#" class="loginLinks"><br />New to our Service?<br /></a>*/}
            </div>
            <div class="loginBox1"></div>
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

const loginBtn = {
    background: '#AAAAAA',
      color: '#FFFFFF',
      width:' 115px',
      height:'35px',
      borderRadius: '50px',
      fontSize: '100%',
      border: 'none',
      cursor: 'pointer'
}
