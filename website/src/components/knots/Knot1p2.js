import React from 'react'
import Header from './../../components/layout/Header';
import DashNav from './../layout/DashNav';
export default function Knot1p2(){
  return(
    <div style={programStyle}>
      <div style={navStyle}>
      <DashNav/>
      </div>
      <React.Fragment>
        <div style ={knotStyle}>
          <p>What resources does your program need to implement intended services? (mark all that apply)</p>
          <div>

            <form style={formStyle}>
              Technology <br/>
              <input type="checkbox" /> Computers <input type="checkbox" /> Tablets <input type="checkbox" /> Office phones<br/>
              <input type="checkbox" /> Website <input type="checkbox" /> Database <input type="checkbox" /> Other<br/>

              Space <br/>
              <input type="checkbox" /> Office Space <input type="checkbox" /> Temporary space <input type="checkbox" /> Canopies<br/>
              <input type="checkbox" /> Training Space <input type="checkbox" /> Option 5 <input type="checkbox" /> Other<br/>

              Materials <br/>
              <input type="checkbox" /> Training <input type="checkbox" /> Outreach <input type="checkbox" /> Office Supplies <br/>
              <input type="checkbox" /> Service Delivery <input type="checkbox" /> Option 5 <input type="checkbox" /> Other<br/>

              Staff <br/>
              <input type="checkbox" /> Program Manager <input type="checkbox" /> Training Specialist <input type="checkbox" /> Option 3 <br/>
              <input type="checkbox" /> Case Wroker <input type="checkbox" /> Community Education <input type="checkbox" /> Other <br/>

              Other <br/>
              <input type="text"/> <br/>

              <input type="submit" value="Next"/>
            </form>
            </div>
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
