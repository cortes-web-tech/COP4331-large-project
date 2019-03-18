import React from 'react';
import {Link} from 'react-router-dom';
import './../../App.css';

function Knots(){
  return(
    <header className="KnotsContainer" style={knotStyle}>
    <div style={innerBox}>
      <div style={boxStyle}>
        <h1 style={h1Style}>Knot 1</h1>
        <h2 style={h2Style}>Understand what your program would do</h2>
        <ol style={listStyle}>
          <li>Pinpoint resources you will need</li>
          <li>Identify activities to run your program</li>
          <li>Organize resources and identify what is missing</li>
        </ol>
      </div>
      <div style={box2Style}>
        <h1 style={h1Style}>Knot 2</h1>
        <h2 style={h2Style}>Identify what to measure in your program</h2>
        <ol style={listStyle}>
          <li>Identify outputs of your program</li>
          <li>Document measurable outcomes</li>
          <li>Create and download your logic model</li>
        </ol>
      </div>
    </div>

    <div style={innerBox}>
      <div style={box2Style}>
        <h1 style={h1Style}>Knot 3</h1>
        <h2 style={h2Style}>Track your program performance</h2>
        <ol style={listStyle}>
          <li>Have access to question bank for eveloping tools</li>
          <li>Collect data to track performance</li>
          <li>Visualize data and download graphs</li>
        </ol>
      </div>

      <div style={boxStyle}>
      <h1 style={h1Style}>Knot 4</h1>
      <h2 style={h2Style}>Increase your capacity</h2>
      <ol style={listStyle}>
        <li>Access to webinars and resources on evaluation topics</li>
        <li>Make appointments & chat with our experts</li>
        <li>Frequently asked questions</li>
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
  flexDirection: 'column'
}

const boxStyle = {
  flex:1,
  borderRadius:'8px',
  background: '#4D5CA2',
  textAlign: 'Center',
  margin: 10

}

const box2Style = {
  flex:1,
  borderRadius:'8px',
  background: '#EDA85F',
  textAlign: 'Center',
  margin: 10

}


const innerBox = {
  display: 'flex',
  flexDirection: 'row'
}

const h1Style = {
  color: 'white',
  textAling: 'justify',

}

const h2Style = {
  fontSize: 24
}

const listStyle = {
  listStyle: 'none'
}

export default Knots
