import React from 'react';
import {Link} from 'react-router-dom';
import './../../App.css';
import Footer from './Footer';

function Services(){
  return(
    <div style={servicesContainer}>
      <h1 style={h1Style}><b>Choose the service that best fits your needs</b></h1>
      <p style = {pStyle}>With Keepu, evaluate your program on a wide range of topics to increase efficiency and
      <br/>accountability by choosing a plan that best fits your organization and budget.</p>
      <div style={serviceStyle}>
        <div style={boxStyle}>
          <h3 style={price}><b>Free</b></h3>
          <h6 style={h6Style}>One Trial</h6>
          <p style={pStyle}> One free limited
          <br/>program evaluation.
          <br/>Gain limited access to <br/>KEEPU</p>
          <button type="button" style={btnStyle}>Select</button>
        </div>
        <div style={boxStyle}>
          <h3 style={price}><b>$50</b></h3>
          <h6 style={h6Style}>Per month</h6>
          <p style={pStyle}> Evaluate up to three
          <br/>programs. Gain full
          <br/>access to all four knots.<br/><br/></p>
          <button type="button" style={btnStyle}>Select</button>
        </div>
        <div style={boxStyle}>
          <h3 style={price}><b>$100</b></h3>
          <h6 style={h6Style}>Per Month</h6>
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
  color: "black",
    minHeight: '100vh',
    padding: '2em 1em 2em 1em'
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
  paddingTop: '5em'

}

const h1Style = {
  color: '#F7921C',
  textAling: 'justify',
  fontSize: '5vh'

}

const h6Style = {
  color: '#4D5CA2',
  fontWeight: 'bold'
}

const pStyle = {
  fontSize: '2.3vh',
  color: '#545871',
  paddingTop: '1em'
}

const btnStyle = {
  background: '#4D5CA2',
  color: '#ffffff',
  width:' 100px',
  height:'40px',
  borderRadius: '25px',
  border: '0'
}

const price = {
    color: '#F7921C',
    fontSize: '4vh'
}



export default Services
