import React from 'react'
import Header from './../../components/layout/Header';
import Footer from './../../components/layout/Footer';
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
    <Footer/>
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
