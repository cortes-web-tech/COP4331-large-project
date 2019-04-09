import React from 'react';
import {Link} from 'react-router-dom';
import './../../App.css';
import ArtBW from './../../artBW.png';

function WhyKeepu(){
  return(
    <div style={whyKeepuStyle}>
      <div style={boxStyle}>
        <img src={ArtBW} height="400" widt="400"/>
      </div>
      <div style={boxStyle}>
        <div style={formatText}>
        <h1 style={h1Style}>Why the name <br/>Keepu?</h1>
        <p style={pStyle}>Keepu, which is also referred to as Quipu,
        <br/>is a communication device used by the
        <br/>Incas civilization to document records
        <br/>related to the way Incas used to live. Now,
        <br/>we can adapt this idea with tracking your
        <br/>organization goals and objectives in
        <br/>uniqure ways to increase transparency
        <br/>and accountability.</p>
        </div>
      </div>
    </div>
  )
}

const whyKeepuStyle = {
  backgroundColor: '#FFDBB5',
  display: 'flex'
}

const boxStyle = {
  flex:1,
  paddingTop:10,
  paddingBottom: 10,
  textAling: 'left',

}

const formatText = {
  // textAlign: 'start'
}
const h1Style = {
  color: '#F7921C',
  textAling: 'left',

}

const pStyle = {
  color: '#4D5CA2',

}

export default WhyKeepu
