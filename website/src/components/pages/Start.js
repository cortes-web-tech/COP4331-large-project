import React from 'react'
import Header from './../../components/layout/Header';

export default function Start(){
  return(
  <div style={getStartedContainer}>
    <Header/>
    <React.Fragment>
      <div style={style}>
        <h1 >Start</h1>
        <p>This is coming from Start.js</p>
      </div>
    </React.Fragment>
  </div>
  )
}

const style = {
  // background: '#d6b9e8',
  color: '#ffffff',
  textAlign: 'center',
}

const getStartedContainer = {

}
