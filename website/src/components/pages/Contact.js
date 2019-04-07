import React from 'react'
import Header from './../../components/layout/Header';
import Footer from './../../components/layout/Footer';

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
    <Footer/>
  </div>
  )
}

const style = {
  color: '#ffffff',
  textAlign: 'center',
  cover: '100%',
  background: "#aaaaaa",
  backgroundSize: 'cover'
}
