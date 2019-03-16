import React from 'react'
import Header from './../../components/layout/Header';

export default function Authors(){
  return(
  <div>
    <Header/>
    <React.Fragment>
      <div style={style}>
        <h1 >Authors</h1>
        <p>This is coming from Authors.js</p>
      </div>
    </React.Fragment>
  </div>
  )
}

const style = {
  // background: '#d6b9e8',
  padding: 0,
  color: '#ffffff',
  textAlign: 'center',

}
