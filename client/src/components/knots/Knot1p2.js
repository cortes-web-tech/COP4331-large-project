import Header from './../../components/layout/Header';
import DashNav from './../layout/DashNav';
import React , { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Knot1p2 extends Component{

  constructor(props) {
    super(props);
    this.state = {
      q4check1: false,
      q4check2: false,
      q4check3: false,
      q4check4: false,
      q5check1: false,
      q5check2: false,
      q5check3: false,
      q5check4: false,
      q6check1: false,
      q6check2: false,
      q6check3: false,
      q6check4: false,
      q7check1: false,
      q7check2: false,
      q7check3: false,
      q7check4: false

    };

    this.onCheck = this.onCheck.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onCheck(e) {
    console.log(e.currentTarget.id)
    this.setState({
      [e.currentTarget.id]: e.target.checked
    });
  }

  onSubmit(e) {
  //  console.log(this.state);

    e.preventDefault();

    const knot1p2 = {
      q4: [this.state.q4check1, this.state.q4check2, this.state.q4check3, this.state.q4check4],
      q5: [this.state.q5check1, this.state.q5check2, this.state.q5check3, this.state.q5check4],
      q6: [this.state.q6check1, this.state.q6check2, this.state.q6check3, this.state.q6check4],
      q7: [this.state.q7check1, this.state.q7check2, this.state.q7check3, this.state.q7check4],
      owner: window.id
    }

    var url = 'https://keepu.azurewebsites.net/api/knot1/';
    //axios.get(url).then(res => console.log(res.data[0]._id));

    axios.get(url + window.id
    ).then(res => {
        // update knot1
        var knotId = res.data[0]._id;
        axios.patch(url + knotId,
          knot1p2
        ).then(res => console.log(res.status));

    });
  }

  render() {
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
              <input type="checkbox" checked={this.state.q4check1} onChange={this.onCheck} id="q4check1"/> Computers <input type="checkbox" checked={this.state.q4check2} onChange={this.onCheck} id="q4check2"/> Tablets <input type="checkbox" checked={this.state.q4check3} onChange={this.onCheck} id="q4check3"/> Office phones<br/>
              <input type="checkbox" checked={this.state.q4check4} onChange={this.onCheck} id="q4check4"/> Website <input type="checkbox" checked={this.state.q4check5} onChange={this.onCheck} id="q4check5"/> Database <br />

              Space <br/>
              <input type="checkbox" checked={this.state.q5check1} onChange={this.onCheck} id="q5check1"/> Office Space <input type="checkbox" checked={this.state.q5check2} onChange={this.onCheck} id="q5check2"/> Temporary space <input type="checkbox" checked={this.state.q5check3} onChange={this.onCheck} id="q5check3"/> Canopies<br/>
              <input type="checkbox" checked={this.state.q5check4} onChange={this.onCheck} id="q5check4"/> Training Space <br/>

              Materials <br/>
              <input type="checkbox" checked={this.state.q6check1} onChange={this.onCheck} id="q6check1"/> Training <input type="checkbox" checked={this.state.q6check2} onChange={this.onCheck} id="q6check2"/> Outreach <input type="checkbox" checked={this.state.q6check3} onChange={this.onCheck} id="q6check3"/> Office Supplies <br/>
              <input type="checkbox" checked={this.state.q6check4} onChange={this.onCheck} id="q6check4"/> Service Delivery <br/>

              Staff <br/>
              <input type="checkbox" checked={this.state.q7check1} onChange={this.onCheck} id="q7check1"/> Program Manager <input type="checkbox" checked={this.state.q7check2} onChange={this.onCheck} id="q7check2"/> Training Specialist <input type="checkbox" checked={this.state.q7check3} onChange={this.onCheck} id="q7check3"/> Case Worker<br/>
              <input type="checkbox" checked={this.state.q7check4} onChange={this.onCheck} id="q7check4"/> Community Educator<br/>


              <input type="button" value="Save" onClick = {this.onSubmit}/>
              <Link to="/knot1p3">
              <input type="button" value="Next" />
              </Link>
            </form>
            </div>
        </div>
      </React.Fragment>
    </div>
  )
}
}
export default Knot1p2;

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
