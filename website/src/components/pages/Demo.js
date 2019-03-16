import React from 'react'
import Header from './../../components/layout/Header';

export default function Demo(){
  return(
  <div>
    <Header/>
    <React.Fragment>
      <div style={demoContainer}>
        <div style={style}>
          <h1 >Demo</h1>
          <p>This is coming from the Demo.js</p>
        </div>
      </div>
    </React.Fragment>
  </div>
  )
}

const style = {
  // fontSize: '20px',
  color: '#ffffff',
  textAlign: 'center',
}

const demoContainer = {
  // opacity: '0.8',
  // background: 'black'
}
