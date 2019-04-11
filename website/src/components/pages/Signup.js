import React , { Component } from 'react';
import blackRope from '../../blackRope.svg';
import './Signup.css';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      passwordInput: '',
      passwordRepeatInput: '',
      termsPolicy: false,
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRepeatPassword = this.onChangeRepeatPassword.bind(this);
    this.onCheckBox = this.onCheckBox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(e) {
    this.setState({
      emailInput: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      passwordInput: e.target.value
    });
  }

  onChangeRepeatPassword(e) {
    this.setState({
        passwordRepeatInput: e.target.value
    });

  }

  onCheckBox(e) {
    this.setState({
        termsPolicy: true
    });
  }


  onSubmit(e) {
    e.preventDefault();

    if (this.state.passwordInput !== this.state.passwordRepeatInput)
    {
        alert("Passwords don't match");

        this.setState({
            emailInput: '',
            passwordInput: '',
            passwordRepeatInput: '',
            termsPolicy: false,
    });


    }
    else if (this.state.termsPolicy !== true)
    {
        alert("Must accept Terms of Service");

        this.setState({
            emailInput: '',
            passwordInput: '',
            passwordRepeatInput: '',
            termsPolicy: false,
    });

    }
    else
    {
        const newUser = {
            email: this.state.emailInput,
            password: this.state.passwordInput
          };

          axios.post('http://localhost:3001/users', newUser).then(res => console.log(res.data));
          //axios.post('http://localhost:3001/users/login', userLogin).then(res => console.log(res.data));

          console.log(`Submitted`);
          console.log(`Email: ${this.state.emailInput}`);
          console.log(`Password: ${this.state.passwordInput}`);

    }

    this.setState({
            emailInput: '',
            passwordInput: '',
            passwordRepeatInput: '',
    });


  }

  render() {
    return (
      <React.Fragment>
            <div style={signup}>
                <div className="picContainer">
                <img src = {blackRope} alt=""/>
                </div>
                <div className="formBox">
                    <br />
                    <div className="topBox">
                        <h1 id="message">You tied the knot! Just a few more steps and we are ready to go!</h1>
                    </div>
                    <br />

                    <form name="sigup" action="" onSubmit={this.onSubmit}>

                        <div className="conainer1">
                            <label className="emaiLabel" style={labels}>Email address</label>
                            <input type="email" name="email" placeholder="Your email address" maxLength="30" value={this.state.emailInput} onChange={this.onChangeEmail}/>
                        </div>

                        <div className="conainer2">
                            <div>
                                <label className="pwsLabel" style={labels}>Password</label>
                                <input type="password" name="password" className="password" style={pswInput} placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" maxLength="30" value={this.state.passwordInput} onChange={this.onChangePassword}/>
                            </div>

                            <div style={pswInputbox}>
                                <label className="pwsRepeatLabel" style={labels}>Confirm password</label>
                                <input type="password" name="passwordRepeat" className="passwordRepeat" style={pswInput} placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" maxLength="30" value={this.state.passwordRepeatInput} onChange={this.onChangeRepeatPassword}/>
                            </div>
                        </div>

                        <div className="conainer3">
                            <input type="checkbox" name="acceptPolicy" value={this.state.termsPolicy} onChange={this.onCheckBox}/>
                            <label>I have read the Privacy Policy and agree to the Terms of Service.</label>
                        </div>

                        <div className="bottomBox">
                            <p className="logoLink">Already a member? Log in</p>
                            <input type="submit" style={signinBtn} value="Sign Up"/>
                        </div>

                     </form>

                </div>
            </div>
      </React.Fragment>
    );
  }
}

export default Signup;

const signup = {
  backgroundColor: '#EEEEEE',
  display: "flex",
  flexDirection: "row",
  width: "100%",
  fontSize: "50px",
  marginLeft: "auto",
  marginRight: "auto",
  height: "100%",
  backgroundSize: "cover"
}

const labels = {
    display: "block",
    marginBottom: "10px",
    color: "#888888",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "left",
}

const pswInput = {
    display:"block",
    marginBottom:"10px",
    width:"250px",
    color: "#888888",
    fontSize: "18px",
    textAlign: "left"
}

const pswInputbox = {
    position: "relative",
    left: "40px"
}

const signinBtn = {
    background: '#AAAAAA',
    color: '#FFFFFF',
    width:' 115px',
    height:'35px',
    borderRadius: '50px',
    fontSize: '40%',
    border: 'none',
    cursor: 'pointer',
    position: "relative",
    left: "280px",
    top: "40px"
}
