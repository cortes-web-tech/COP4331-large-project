import React from 'react';
import {Link} from 'react-router-dom';
import './../../App.css';

function Services(){
  return(
    <div style={servicesContainer}>
      <h1 style={h1Style}>Choose the services that best fits your needs</h1>
      <p style = {pStyle}>With Keepu, evaluate your program on a wide range of topics to increase efficiency and
      <br/>accountability by choosing a plan that best fits your organization and budget.</p>
      <div style={serviceStyle}>
        <div style={boxStyle}>
          <h3 style={h3Style}>One Trial</h3>
          <p style={pStyle}> One free limited
          <br/>program evaluation.
          <br/>Gain limited access to <br/>KEEPU</p>
          <button type="button" style={btnStyle}>Select</button>
        </div>
        <div style={boxStyle}>
          <h3 style={h3Style}>Per month</h3>
          <p style={pStyle}> Evaluate up to three
          <br/>programs. Gain full
          <br/>access to all four knots.<br/><br/></p>
          <button type="button" style={btnStyle}>Select</button>
        </div>
        <div style={boxStyle}>
          <h3 style={h3Style}>Per Month</h3>
          <p style={pStyle}> Evaluate up to six
          <br/>programs. Gain full
          <br/>access to all four knots.<br/><br/></p>
          <button type="button" style={btnStyle}>Select</button>
        </div>
      </div>
    </div>
  )
}

const servicesContainer = {
  backgroundColor: '#EEF1FF',
  textAlign: 'center',
  color: "black"
}

const serviceStyle = {
  display: 'flex',
  justifyContent: 'space-around'
}

const boxStyle = {
  background: '#FFFFFF',
  flex:1,
  maxWidth:'20%',
  marginBottom: 10,

}

const h1Style = {
  color: '#F7921C',
  textAling: 'justify',

}

const h3Style = {
  color: '#517EBD',

}

const pStyle = {
  fontSize: '18px'
}

const btnStyle = {
  background: '#717EBD',
  color: '#FFFFFF',
  marginBottom: 10,
  border: '0'
}

export default Services
