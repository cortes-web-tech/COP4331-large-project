import React from 'react'
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashNav from './../layout/DashNav';
import Knot1 from './../knots/Knot1';

class Program extends React.Component {
  render() {
    return(
      <div style={programStyle}>
        <div style={navStyle}>
        <DashNav/>
        </div>
        <React.Fragment>
        <div style={knotStyle}>
          <p>Human Trafficking</p>
          <div><Link to="/knot1">Knot 1 Understand your program </Link></div>
          <p>Knot 2 Identify what to measure </p>
          <p>Knot 3 Track performance</p>
          <p>Knot 4 Resource library</p>
        </div>
        <div style={knotStyle}>
          <Router>
            <Route exact path="/knot1" component={Knot1}/>
          </Router>
        </div>

        </React.Fragment>
      </div>
    );
  }
}

const programStyle = {
  backgroundColor: "#cceeff",
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
export default Program;
