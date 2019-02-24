import React from 'react'

export default function Demo(){
  return(
  <React.Fragment>
    <div style={demoContainer}>
      <div style={style}>
        <h1 >Demo</h1>
        <p>This is coming from the Demo.js</p>
      </div>
    </div>
  </React.Fragment>
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
