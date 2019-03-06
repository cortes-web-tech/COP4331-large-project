import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={demoContainer}>
        <div style={video}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0Ssjp43a528" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

          <div style={tagline}>
            <h1> <b>{'Speak with one of our'}</b></h1>
            <h1> <b>{'experts on how'}</b></h1>
            <h1> <b>{'Keepu can help you'}</b></h1>
          </div>

          <div>
          <button type="button" style ={btn}>Schedule a visit</button>
          </div>


        </div>
      </React.Fragment>
    );
  }
}
export default Demo;

const tagline = {
  // fontSize: '20px',
  color: '#ffffff',
  textAlign: 'right',
  display: 'inline-block',
}

const demoContainer = {
  // opacity: '0.8',
   background: '#807bbd',
   minHeight: '100%'
}

const btn = {
    background: '#ffffff',
    color: '#807bbd',
    width:' 200px',
    height:'50px',
    borderRadius: '25px',
    fontSize: '45%',
    float: 'right',
    marginRight: '18%'
}

const video = {
  textAlign: 'center',
  display: 'inline-block',
  paddingTop: '10%',
  paddingRight: '20%',
}
