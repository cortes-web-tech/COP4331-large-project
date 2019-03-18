import React, { Component } from 'react';
import Header from './../../components/layout/Header';
import { Button } from 'reactstrap';
import './Demo.css';

class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <div style = {demo}>
        <Header/>
          <div class = "demoContainer">

            <div class = "demoBox1">
              <div class="ratio">
                <iframe class = "frame" width="640" height="390" src="https://www.youtube.com/embed/0Ssjp43a528" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>

            <div class = "demoBox2">
              <h1 style ={h1}> <b>{'Speak with one of our'}</b></h1>
              <h1 style={h1}> <b>{'experts on how'}</b></h1>
              <h1 style={h1}> <b>{'Keepu can help you'}</b></h1>
              <button type="button" style ={btn}>Schedule a visit</button>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}
export default Demo;


const demo = {
  // opacity: '0.8',
   background: '#807bbd',
   height: '100%'
}

const btn = {
  background: '#ffffff',
    color: '#807bbd',
    width:' 200px',
    height:'50px',
    borderRadius: '25px',
    fontSize: '45%',
}

const h1 = {
  fontSize: '110%'
}
