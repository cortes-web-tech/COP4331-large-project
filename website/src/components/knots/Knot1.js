import React from 'react'
import Header from './../../components/layout/Header';
import DashNav from './../layout/DashNav';
export default function Knot1(){

  return(
    <div style={programStyle}>
      <div style={navStyle}>
      <DashNav/>
      </div>
      <React.Fragment>
        <div style ={knotStyle}>
          <form style={formStyle}>
            <input type="checkbox" /> Provide comprehensive short term services to victims of human trafficking <br/>
          	<input type="checkbox" /> Promote collaboration and coordination of services<br/>
          	<input type="checkbox" /> Provide trainings on human trafficking victims topics<br/>
          	<input type="checkbox" /> Create awareness about human traffic<br/>
          	<input type="checkbox" /> Provide trainings on human trafficking victims topics<br/>
            <input type="submit" value="Next"/>
          </form>
        </div>
      </React.Fragment>
    </div>
  )
}



const programStyle = {
  backgroundColor: "#cceeee",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
}

const navStyle = {
  flex: 1
}

const knotStyle = {
  flex: 3
}

const formStyle = {
  justifyContent: 'left'
}
