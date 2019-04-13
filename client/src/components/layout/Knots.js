import React from 'react';
import {Link} from 'react-router-dom';
import './../../App.css';

function Knots(){
  return(
    <header className="KnotsContainer" style={knotStyle}>
    <div style={innerBox}>
      <div style={boxStyle}>
        <h1 style={h1Style}>Knot 1</h1>
        <h2 style={h2Style}>Understand what your program would do<br/></h2>
        <ol style={listStyle}>
          <li>Pinpoint resources you will need<br/><br/></li>
          <li>Identify activities to run your program<br/><br/></li>
          <li>Organize resources and identify what is missing<br/></li>
        </ol>
      </div>
      <div style={box2Style}>
        <h1 style={h1Style}>Knot 2</h1>
        <h2 style={h2Style}>Identify what to measure in your program<br/></h2>
        <ol style={listStyle}>
          <li>Identify outputs of your program<br/><br/></li>
          <li>Document measurable outcomes<br/><br/></li>
          <li>Create and download your logic model<br/></li>
        </ol>
      </div>
    </div>

    <div style={innerBox}>
      <div style={box2Style}>
        <h1 style={h1Style}>Knot 3</h1>
        <h2 style={h2Style}>Track your program performance<br/></h2>
        <ol style={listStyle}>
          <li>Have access to question bank for eveloping tools<br/><br/></li>
          <li>Collect data to track performance<br/><br/></li>
          <li>Visualize data and download graphs<br/></li>
        </ol>
      </div>

      <div style={boxStyle}>
      <h1 style={h1Style}>Knot 4</h1>
      <h2 style={h2Style}>Increase your capacity<br/></h2>
      <ol style={listStyle}>
        <li>Access to webinars and resources on evaluation topics<br/><br/></li>
        <li>Make appointments & chat with our experts<br/><br/></li>
        <li>Frequently asked questions<br/></li>
      </ol>
      </div>
    </div>
    </header>
  )
}

const knotStyle = {
  color:'white',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '900px',
  margin: '4em 3em 4em 3em',

}

const boxStyle = {
  flex:1,
  borderRadius:'8px',
  background: '#4D5CA2',
  textAlign: 'Center',
  margin: 10,
  minHeight: '400px'

}

const box2Style = {
  flex:1,
  borderRadius:'8px',
  background: '#EDA85F',
  textAlign: 'Center',
  margin: 10,
  minHeight: '400px'

}


const innerBox = {
  display: 'flex',
  flexDirection: 'row'
}

const h1Style = {
  color: 'white',
  textAling: 'justify',
  fontWeight: 'bold',
  fontSize: '3em'

}

const h2Style = {
  fontSize: '1.5em',
  textDecoration: 'underline',
  fontWeight: 'bold'
}

const listStyle = {
  textAlign: 'left',
  listStyle: 'none',
  fontSize: '1.25em'
}

export default Knots
