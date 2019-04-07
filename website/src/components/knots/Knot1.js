import Header from './../../components/layout/Header';
import DashNav from './../layout/DashNav';
import React , { Component } from 'react';
import axios from 'axios';

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

    this.onQ1check1Change = this.onQ1check1Change.bind(this);
    this.onQ1check2Change = this.onQ1check2Change.bind(this);
    this.onQ1check3Change = this.onQ1check3Change.bind(this);
    this.onQ1check4Change = this.onQ1check4Change.bind(this);
    this.onQ1check5Change = this.onQ1check5Change.bind(this);
    this.test = this.test.bind(this);
  }

  onQ1check1Change(e) {
    this.setState({
      q1check1: e.target.checked
    });
  }

  onQ1check2Change(e) {
    this.setState({
      q1check2: e.target.checked
    });
  }
  onQ1check3Change(e) {
    this.setState({
      q1check3: e.target.checked
    });
  }
  onQ1check4Change(e) {
    this.setState({
      q1check4: e.target.checked
    });
  }
  onQ1check5Change(e) {
    this.setState({
      q1check5: e.target.checked
    });
  }

  test(e) {
  //  console.log(this.state);

    e.preventDefault();

    const knot1q1 = {
      q1: [this.state.q1check1, this.state.q1check2, this.state.q1check3, this.state.q1check4, this.state.q1check5],
      owner: window.id
    }
    console.log(knot1q1);

    var url = 'http://localhost:3001/knot1/';
    //axios.get(url).then(res => console.log(res.data[0]._id));

    axios.get(url + window.id
    ).then(res => {
      var knotId = res.data[0]._id;
      // if the user does not have a knot1 make one, else update existing
      if(res.data[0] === undefined) {
        // create knot1
        axios.post(url,
          knot1q1
        ).then(res => console.log(res.data));
      } else {
        // update knot1
        console.log('here');
        axios.patch(url + knotId,
          knot1q1
        ).then(res => console.log(res.data));
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
            <input type="checkbox" checked={this.state.q1check1} onChange={this.onQ1check1Change}/> Provide comprehensive short term services to victims of human trafficking <br/>
          	<input type="checkbox" checked={this.state.q1check2} onChange={this.onQ1check2Change}/> Promote collaboration and coordination of services<br/>
          	<input type="checkbox" checked={this.state.q1check3} onChange={this.onQ1check3Change}/> Provide trainings on human trafficking victims topics<br/>
          	<input type="checkbox" checked={this.state.q1check4} onChange={this.onQ1check4Change}/> Create awareness about human traffic<br/>
          	<input type="checkbox" checked={this.state.q1check5} onChange={this.onQ1check5Change}/> Provide trainings on human trafficking victims topics<br/>
            <input type="button" value="Next" onClick={this.test}/>
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
