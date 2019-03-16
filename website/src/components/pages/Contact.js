import React from 'react'
import Header from './../../components/layout/Header';

export default function Contact(){
  return(
  <div>
    <Header/>
    <React.Fragment>
    <div style={style}>
        <h1 >Contact</h1>
        <p>This is coming from the Contact.js</p>
      </div>
    </React.Fragment>
  </div>
  )
}

const style = {
  color: '#ffffff',
  textAlign: 'center',
}
