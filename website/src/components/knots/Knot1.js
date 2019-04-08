import Header from './../../components/layout/Header';
import DashNav from './../layout/DashNav';
import React , { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Knot1 extends Component{

  constructor(props) {
    super(props);
    this.state = {
      q1check1: false,
      q1check2: false,
      q1check3: false,
      q1check4: false,
      q1check5: false
    };

    this.onCheck = this.onCheck.bind(this);
    this.test = this.test.bind(this);
  }



  onCheck(e) {
    console.log(e.currentTarget.id)
    this.setState({
      [e.currentTarget.id]: e.target.checked
    });
  }


  test(e) {
  //  console.log(this.state);

    e.preventDefault();

    const knot1q1 = {
      q1: [this.state.q1check1, this.state.q1check2, this.state.q1check3, this.state.q1check4, this.state.q1check5],
      owner: window.id
    }
    //console.log(knot1q1);

    var url = 'http://localhost:3001/knot1/';
    //axios.get(url).then(res => console.log(res.data[0]._id));

    axios.get(url + window.id
    ).then(res => {
      // if the user does not have a knot1 make one, else update existing
      if(res.data[0] === undefined) {
        // create knot1
        axios.post(url,
          knot1q1
        ).then(res => console.log('no knots'));
      } else {
        // update knot1
        var knotId = res.data[0]._id;
        axios.patch(url + knotId,
          knot1q1
        ).then(res => console.log('there are knots'));
      }
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
          <form style={formStyle}>
            <input type="checkbox" checked={this.state.q1check1} onChange={this.onCheck} id="q1check1"/> Provide comprehensive short term services to victims of human trafficking <br/>
          	<input type="checkbox" checked={this.state.q1check2} onChange={this.onCheck} id="q1check2"/> Promote collaboration and coordination of services<br/>
          	<input type="checkbox" checked={this.state.q1check3} onChange={this.onCheck} id="q1check3"/> Provide trainings on human trafficking victims topics<br/>
          	<input type="checkbox" checked={this.state.q1check4} onChange={this.onCheck} id="q1check4"/> Create awareness about human traffic<br/>
          	<input type="checkbox" checked={this.state.q1check5} onChange={this.onCheck} id="q1check5"/> Provide trainings on human trafficking victims topics<br/>

            <input type="button" value="Save" onClick = {this.test}/>
            <Link to="/knot1p2">
            <input type="button" value="Next" />
            </Link>
          </form>
        </div>
      </React.Fragment>
    </div>
  )
}
}

export default Knot1;


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

const buttonStyle = {

}
