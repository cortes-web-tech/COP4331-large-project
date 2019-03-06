import React , { Component } from 'react';
import Background from '../../background.png';

class Start extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={body}>
        <div style={tagline}>
          <h1> <b>{'Program evaluation'}</b></h1>
          <h1> <b>{'made simple'}</b></h1>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Start;

const body = {
  backgroundImage: "url(" + Background +")",
  width: "100%",
  color: "#f00fff",
  fontSize: "50px",
  marginLeft: "auto",
  marginRight: "auto",
   height: "100%",

  backgroundSize: "cover"
}

const tagline = {
  color: '#ffffff',
  textAlign: 'left',
  fontWeight: '200',
  padding: '1em',
  position: 'absolute',
  bottom: '4em'
}
