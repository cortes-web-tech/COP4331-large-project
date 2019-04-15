import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashNav from './../layout/DashNav';
import html2canvas from 'html2canvas';
import axios from 'axios';


export default class Program extends React.Component {
  constructor(){
    super()
    this.state = {
      phKnot: true,
      showKnot1: false,
      showKnot2: false,
      showKnot3: false,
      knot2Landing: false,
      showOutput: false,
      showOutcome: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      q1c1: false,
      q1c2: false,
      q1c3: false,
      q1c4: false,
      q2: false,
      q3: '',
      q4c1: false,
      q4c2: false,
      q4c3: false,
      q5c1: false,
      q5c2: false,
      q5c3: false,
      q6c1: false,
      q6c2: false,
      q6c3: false,
      q6c4: false,
      q7c1: false,
      q7c2: false,
      q7c3: false,
      q7c4: false,
      q8: 0,
      q9: 0,
      q10: 0,
      q11: 0,
      q12: 0,
      q13: 0,
      q14: 0,
      q15: 0,
      q16: 0,
      q17: 0,
      q18c1: false,
      q18c2: false,
      q18c3: false,
      k2q1: 0,
      k2q2: 'Law enforcement',
      k2q3: 'Receive',
      k2q4: 'A training on how to identify human trafficking warning signs',
      k2q5: 'once',
      k2q6: 'a day',
      k2q7: 0,
      k2q8: 'Law enforcement',
      k2q9: 'increase',
      k2q10: 'knowledge',
      k2q11: 'after completing the program',
      output: ' + Click here to create an output',
      outcome: ' + Click here to create an outcome',
      mission: '',
      inputs: [],
      activites: []

    }

    this.onCheck = this.onCheck.bind(this);
    this.onSaveKnot1Part1 = this.onSaveKnot1Part1.bind(this);
    this.onSaveKnot1Part2 = this.onSaveKnot1Part2.bind(this);
    this.onSaveKnot1Part3 = this.onSaveKnot1Part3.bind(this);
    this.onSaveKnot1Part4 = this.onSaveKnot1Part4.bind(this);
    this.onSaveKnot2Part1 = this.onSaveKnot2Part1.bind(this);
    this.onSaveKnot2Part2 = this.onSaveKnot2Part2.bind(this);
    this.onTyped = this.onTyped.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.generateOutput = this.generateOutput.bind(this);
    this.generateOutcome = this.generateOutcome.bind(this);
    this.viewChart = this.viewChart.bind(this);
  }

  viewChart(e) {

    var userKnot1 = {};
    var userKnot2 = {};

    var url1 = 'https://keepuapp.herokuapp.com/api/knot1/';
    var url2 = 'https://keepuapp.herokuapp.com/api/knot2/';

    axios.get(url1 + window.id
    ).then(res => {
      userKnot1 = res.data[0];
      console.log('INPUTS:');
      if(userKnot1['q4'][0]) {
        this.setState({inputs: [...this.state.inputs, '‣computers']})
      }
      if(userKnot1['q4'][1]) {
        this.setState({inputs: [...this.state.inputs, '‣tablets']})
      }
      if(userKnot1['q4'][2]) {
        this.setState({inputs: [...this.state.inputs, '‣office phones']})
      }
      if(userKnot1['q5'][0]) {
        this.setState({inputs: [...this.state.inputs, '‣office space']})
      }
      if(userKnot1['q5'][1]) {
        this.setState({inputs: [...this.state.inputs, '‣event space']})
      }
      if(userKnot1['q5'][2]) {
        this.setState({inputs: [...this.state.inputs, '‣training space']})
      }
      if(userKnot1['q7'][0]) {
        this.setState({inputs: [...this.state.inputs, '‣managers']})
      }
      if(userKnot1['q7'][1]) {
        this.setState({inputs: [...this.state.inputs, '‣training specialists']})
      }
      if(userKnot1['q7'][2]) {
        this.setState({inputs: [...this.state.inputs, '‣case workers']})
      }
      if(userKnot1['q7'][3]) {
        this.setState({inputs: [...this.state.inputs, '‣community educators']})
      }

      console.log('ACTIVITIES');
      if(userKnot1['q18'][0]) {
        this.setState({activites: [...this.state.activites, '‣identify law enforcement agencies']})
      }
      if(userKnot1['q18'][1]) {
        this.setState({activites: [...this.state.activites, '‣Identify human trafficking prevention service providers']})
      }
      if(userKnot1['q18'][2]) {
        this.setState({activites: [...this.state.activites, '‣Identify potential trainers on human trafficking warning signs']})
      }
    });

    axios.get(url2 + window.id
    ).then(res => {
      userKnot2 = res.data[0];
      this.setState({
        mission: userKnot2['q4']
      })
      var string1 = '';
      if(userKnot2['q2'] === "Law enforcement") {
        string1 = "‣" + userKnot2['q1'] + " " + userKnot2['q2'] + " staff will " + userKnot2['q3'] + " in " + userKnot2['q4'] + " " + userKnot2['q5'] + " " + userKnot2['q6'] + ".";
      } else if(userKnot2['q2'] === "Victims of human trafficking") {
        string1 = "‣" + userKnot2['q1'] + " staffers will assist " + userKnot2['q2'] + " to " + userKnot2['q3'] + " " + userKnot2['q4'] + " " + userKnot2['q5'] + " " + userKnot2['q6'] + ".";
      } else if(userKnot2['q2'] === "Services provided") {
        string1 = "‣" + userKnot2['q1'] + " staffers will " + userKnot2['q3']+ " in " + userKnot2['q4'] + " " + userKnot2['q5'] + " " + userKnot2['q6'] + ".";
      }

      var string2 = '';

      if(userKnot2['q8'] === "Law enforcement") {
        string2 = "‣" + userKnot2['q7'] + "% of " + userKnot2['q8'] + " staff who participate will " + userKnot2['q9'] + " in " + userKnot2['q10'] + " of " + userKnot2['q4'] + " " + userKnot2['q11'] + ".";
      } else if(userKnot2['q8'] === "Victims of human trafficking") {
        string2 = "‣" + userKnot2['q7'] + "% of " + userKnot2['q8'] + " who participate will " + userKnot2['q9'] + " in " + userKnot2['q10'] + " of " + userKnot2['q4'] + " " + userKnot2['q11'] + ".";
      } else if(userKnot2['q8'] === "Service Providers") {
        string2 = "‣" + userKnot2['q7'] + "% of " + userKnot2['q8'] + " who participate will " + userKnot2['q9'] + " in their" + userKnot2['q10'] + " of " + userKnot2['q4'] + " " + userKnot2['q11'] + ".";
      }
      console.log('OUTPUTS');
      console.log(string1);
      console.log('OUTPUTS');
      console.log(string2);
    });
  }


  onCheck(e) {
    console.log(e.currentTarget.id)
    this.setState({
      [e.currentTarget.id]: e.target.checked
    });
  }

  onTyped(e) {
    console.log(e.currentTarget.id);
    this.setState({
      [e.currentTarget.id]: e.target.value
    });
  }

  generateOutput(e) {
    var string = '';
    if(this.state.k2q2 === "Law enforcement") {
      string = "‣" + this.state.k2q1 + " " + this.state.k2q2 + " staff will " + this.state.k2q3 + " in " + this.state.k2q4 + " " + this.state.k2q5 + " " + this.state.k2q6 + ".";
    } else if(this.state.k2q2 === "Victims of human trafficking") {
      string = "‣" + this.state.k2q1 + " staffers will assist " + this.state.k2q2 + " to " + this.state.k2q3 + " " + this.state.k2q4 + " " + this.state.k2q5 + " " + this.state.k2q6 + ".";
    } else if(this.state.k2q2 === "Services provided") {
      string = "‣" + this.state.k2q1 + " staffers will " + this.state.k2q3 + " in " + this.state.k2q4 + " " + this.state.k2q5 + " " + this.state.k2q6 + ".";
    }
    console.log(string);

    this.setState({
      output: string
    });

  }

  generateOutcome(e) {
    var string = '';

    if(this.state.k2q8 === "Law enforcement") {
      string = "‣" + this.state.k2q7 + "% of " + this.state.k2q8 + " staff who participate will " + this.state.k2q9 + " in " + this.state.k2q10 + " of " + this.state.k2q4 + " " + this.state.k2q11 + ".";
    } else if(this.state.k2q8 === "Victims of human trafficking") {
      string = "‣" + this.state.k2q7 + "% of " + this.state.k2q8 + " who participate will " + this.state.k2q9 + " in " + this.state.k2q10 + " of " + this.state.k2q4 + " " + this.state.k2q11 + ".";
    } else if(this.state.k2q8 === "Service Providers") {
      string = "‣" + this.state.k2q7 + "% of " + this.state.k2q8 + " who participate will " + this.state.k2q9 + " in their" + this.state.k2q10 + " of " + this.state.k2q4 + " " + this.state.k2q11 + ".";
    }
    console.log(string);

    this.setState({
      outcome: string
    });
  }

  onSelect(e) {
    console.log(e.currentTarget.id);
    var string = e.currentTarget.id;
    string = string.substring(0, string.length -2);
    this.setState({
      [string]: e.target.value
    });
  }

    onSaveKnot1Part1(e) {
    //  console.log(this.state);



      const knot1p1 = {
        q1: [this.state.q1c1, this.state.q1c2, this.state.q1c3, this.state.q1c4],
        q2: this.state.q2,
        q3: this.state.q3,
        owner: window.id
      }
      console.log(knot1p1);

      var url = 'https://keepuapp.herokuapp.com/api/knot1/';
      //axios.get(url).then(res => console.log(res.data[0]._id));

      axios.get(url + window.id
      ).then(res => {
        // if the user does not have a knot1 make one, else update existing
        if(res.data[0] === undefined) {
          // create knot1
          axios.post(url,
            knot1p1
          ).then(res => console.log('no knots'));
        } else {
          // update knot1
          var knotId = res.data[0]._id;
          axios.patch(url + knotId,
            knot1p1
          ).then(res => console.log('there are knots'));
        }
      });
    }

    onSaveKnot1Part2(e) {
    //  console.log(this.state);



      const knot1p2 = {
        q4: [this.state.q4c1, this.state.q4c2, this.state.q4c3],
        q5: [this.state.q5c1, this.state.q5c2, this.state.q5c3],
        q6: [this.state.q6c1, this.state.q6c2, this.state.q6c3, this.state.q6c4],
        q7: [this.state.q7c1, this.state.q7c2, this.state.q7c3, this.state.q7c4],
        owner: window.id
      }
      console.log(knot1p2);

      var url = 'https://keepuapp.herokuapp.com/api/knot1/';
      //axios.get(url).then(res => console.log(res.data[0]._id));

      axios.get(url + window.id
      ).then(res => {
        // if the user does not have a knot1 make one, else update existing
        if(res.data[0] === undefined) {
          // create knot1
          axios.post(url,
            knot1p2
          ).then(res => console.log('no knots'));
        } else {
          // update knot1
          var knotId = res.data[0]._id;
          axios.patch(url + knotId,
            knot1p2
          ).then(res => console.log('there are knots'));
        }
      });
    }

    onSaveKnot1Part3(e) {
    //  console.log(this.state);



      const knot1p3 = {
        q8: this.state.q8,
        q9: this.state.q9,
        q10: this.state.q10,
        q11: this.state.q11,
        q12: this.state.q12,
        q13: this.state.q13,
        q14: this.state.q14,
        q15: this.state.q15,
        q16: this.state.q16,
        q17: this.state.q17,
        owner: window.id
      }
      console.log(knot1p3);

      var url = 'https://keepuapp.herokuapp.com/api/knot1/';
      //axios.get(url).then(res => console.log(res.data[0]._id));

      axios.get(url + window.id
      ).then(res => {
        // if the user does not have a knot1 make one, else update existing
        if(res.data[0] === undefined) {
          // create knot1
          axios.post(url,
            knot1p3
          ).then(res => console.log('no knots'));
        } else {
          // update knot1
          var knotId = res.data[0]._id;
          axios.patch(url + knotId,
            knot1p3
          ).then(res => console.log('there are knots'));
        }
      });
    }

    onSaveKnot1Part4(e) {
    //  console.log(this.state);



      const knot1p4 = {
        q18: [this.state.q18c1, this.state.q18c2, this.state.q18c3],
        owner: window.id
      }
      console.log(knot1p4);

      var url = 'https://keepuapp.herokuapp.com/api/knot1/';
      //axios.get(url).then(res => console.log(res.data[0]._id));

      axios.get(url + window.id
      ).then(res => {
        // if the user does not have a knot1 make one, else update existing
        if(res.data[0] === undefined) {
          // create knot1
          axios.post(url,
            knot1p4
          ).then(res => console.log('no knots'));
        } else {
          // update knot1
          var knotId = res.data[0]._id;
          axios.patch(url + knotId,
            knot1p4
          ).then(res => console.log('there are knots'));
        }
      });
    }

    onSaveKnot2Part1(e) {
    //  console.log(this.state);



      const knot2p1 = {
        q1: this.state.k2q1,
        q2: this.state.k2q2,
        q3: this.state.k2q3,
        q4: this.state.k2q4,
        q5: this.state.k2q5,
        q6: this.state.k2q6,
        owner: window.id
      }
      console.log(knot2p1);

      var url = 'https://keepuapp.herokuapp.com/api/knot2/';
      //axios.get(url).then(res => console.log(res.data[0]._id));

      axios.get(url + window.id
      ).then(res => {
        // if the user does not have a knot1 make one, else update existing
        if(res.data[0] === undefined) {
          // create knot2
          axios.post(url,
            knot2p1
          ).then(res => console.log('no knots'));
        } else {
          // update knot2
          var knotId = res.data[0]._id;
          axios.patch(url + knotId,
            knot2p1
          ).then(res => console.log('there are knots'));
        }
      });
    }

    onSaveKnot2Part2(e) {
    //  console.log(this.state);



      const knot2p2 = {
        q7: this.state.k2q7,
        q8: this.state.k2q8,
        q9: this.state.k2q9,
        q10: this.state.k2q10,
        q11: this.state.k2q11,
        owner: window.id
      }
      console.log(knot2p2);

      var url = 'https://keepuapp.herokuapp.com/api/knot2/';
      //axios.get(url).then(res => console.log(res.data[0]._id));

      axios.get(url + window.id
      ).then(res => {
        // if the user does not have a knot1 make one, else update existing
        if(res.data[0] === undefined) {
          // create knot2
          axios.post(url,
            knot2p2
          ).then(res => console.log('no knots'));
        } else {
          // update knot2
          var knotId = res.data[0]._id;
          axios.patch(url + knotId,
            knot2p2
          ).then(res => console.log('there are knots'));
        }
      });
    }
  toggleKnot1(){
    this.setState({
        ...this.state,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        showKnot1: this.state.showKnot1?false
        :true,
        showKnot2: false,
        showKnot3: false,
        phKnot: this.state.showKnot1?true
        :false
  })
  }

  toggleKnot2(){
    this.setState({
      ...this.state,
      showKnot1: false,
      showKnot3: false,
      showKnot2: this.state.showKnot2?false
      :true,
      phKnot: this.state.showKnot2?true
      :false


})
  }

  toggleKnot3(){
  this.setState({
    ...this.state,
    showKnot1: false,
    showKnot2: false,
    showKnot3: this.state.showKnot3?false
    :true,
    phKnot: this.state.showKnot3?true
    :false


  })

  this.viewChart();
}

hideExtras(){
  this.setState({
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
  })
}


  toggleOutput(){
     this.setState({
       ...this.state,
       knot2Landing: this.state.knot2Landing?false:
       true,
       showOutput: this.state.showOutput?false
       :true,
       showOutcome: false


     })

     this.generateOutput();
     this.onSaveKnot2Part1();
 }

  toggleOutcome(){
  this.setState({
    ...this.state,
    knot2Landing: this.state.knot2Landing?false:
    true,
    showOutcome: this.state.showOutcome?false
    :true,
    showOutput: false


  })

  this.generateOutcome();
  this.onSaveKnot2Part2();
}

  toggle1(){
    this.setState({
      ...this.state,
      show1: !this.state.show1,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
})

  }

  toggle2(){
    this.setState({
       ...this.state,
       show1: false,
       show2: !this.state.show2,
       show3: false,
       show4: false,
       show5: false,
 })
 this.onSaveKnot1Part1();
  }

  toggle3(){
    this.setState({
       ...this.state,
       show1: false,
       show2: false,
       show3: !this.state.show3,
       show4: false,
       show5: false,

 })
 this.onSaveKnot1Part2();
  }

  toggle4(){
    this.setState({
      ...this.state,
      show1: false,
      show2: false,
      show3: false,
      show4: !this.state.show4,
      show5: false

})
this.onSaveKnot1Part3();
  }

  toggle5(){
    this.setState({
      ...this.state,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: !this.state.show5,
})
this.onSaveKnot1Part4();
  }

  render() {
    return(
      <div style={programStyle}>
        <div style={navStyle}>
        <DashNav/>
        </div>
        <React.Fragment>
        <div style={knotStyle}>
          <div style={dBox}>
            <h1 style={titleStyle}>Human Trafficking</h1>
            </div>

          <div style={eBox}>
            <button style = {enabled} onClick={()=>this.toggleKnot1()}>Knot 1 Understand your program </button>
          </div>

          <div style={eBox}>
            <button style = {enabled} onClick={()=>this.toggleKnot2()}>Knot 2 Identify what to measure </button>
          </div>

          <div style={dBox}>
            <button style = {disabled} onClick={()=>this.toggleKnot3()}>
              <p>Knot 3</p>
              Track performance
            </button>
</div>

          <div style={dBox}>
            <p>Knot 4 Resource library</p>
          </div>
        </div>

        {
          this.state.phKnot?
          <div style={knotQ}>
            <p style = {phStyle}>
            Click on a knot to begin/continue
            </p>
          </div>
          :null
        }

        {
          this.state.showKnot1?

        <div style={knotQ}>
          <div>
            <h1>Knot 1</h1>
            <p>Understand your program</p>
          </div>

          <div style={formArea}>
            <div style={catArea}>
            <h2 style ={headStyle}>Program characteristics</h2>
            {
              this.state.show1?
              <form style={formStyle}>
              <h6>Within the field of human trafficking my program would (mark all that apply):</h6>
                <input type="checkbox" id="q1c1" checked={this.state.q1c1} onChange={this.onCheck}/> Provide comprehensive short term services to victims of human trafficking <br/>
              	<input type="checkbox" id="q1c2" checked={this.state.q1c2} onChange={this.onCheck}/> Promote collaboration and coordination of services<br/>
              	<input type="checkbox" id="q1c3" checked={this.state.q1c3} onChange={this.onCheck}/> Provide trainings on human trafficking victims topics<br/>
              	<input type="checkbox" id="q1c4" checked={this.state.q1c4} onChange={this.onCheck}/> Create awareness about human traffic<br/>
              <h6><br/>Funding</h6>
                <input type="checkbox" id="q2" checked={this.state.q2} onChange={this.onCheck}/> Is your program funded yet?<br/>
                <input type="text" id="q3" onChange={this.onTyped}/> By who?<br/>

              </form>
              :null
            }
            </div>
            <div>
              <button style ={plusButton} onClick={()=>this.toggle1()}>+</button>

            </div>
          </div>
          <div style={formArea}>
            <div style={catArea}>
            Program Resources
            {
              this.state.show2?
              <form style={formStyle}>
              <h6>What resources does your program need to implement intended services? (mark all that apply)</h6>
              Technology <br/>
              <input type="checkbox" id="q4c1" checked={this.state.q4c1} onChange={this.onCheck}/> Computers <input type="checkbox" id="q4c2" checked={this.state.q4c2} onChange={this.onCheck}/> Tablets <input type="checkbox" id="q4c3" checked={this.state.q4c3} onChange={this.onCheck}/> Office phones<br/>

              <br/>Space <br/>
              <input type="checkbox" id="q5c1" checked={this.state.q5c1} onChange={this.onCheck}/> Office Space <input type="checkbox" id="q5c2" checked={this.state.q5c2} onChange={this.onCheck}/> Event space <input type="checkbox" id="q5c3" checked={this.state.q5c3} onChange={this.onCheck}/> Training Space<br/>

              <br/>Materials <br/>
              <input type="checkbox" id="q6c1" checked={this.state.q6c1} onChange={this.onCheck}/> Training <input type="checkbox" id="q6c2" checked={this.state.q6c2} onChange={this.onCheck}/> Outreach <input type="checkbox" id="q6c3" checked={this.state.q6c3} onChange={this.onCheck}/> Office Supplies
              <input type="checkbox" id="q6c4" checked={this.state.q6c4} onChange={this.onCheck}/> Service Delivery<br/>

              <br/>Staff <br/>
              <input type="checkbox" id="q7c1" checked={this.state.q7c1} onChange={this.onCheck}/> Program Manager <input type="checkbox" id="q7c2" checked={this.state.q7c2} onChange={this.onCheck}/> Training Specialist <input type="checkbox" id="q7c3" checked={this.state.q7c3} onChange={this.onCheck}/> Case Worker
              <input type="checkbox" id="q7c4" checked={this.state.q7c4} onChange={this.onCheck}/> Community Educator

              </form>
              :null
            }
            </div>
            <div>
              <button style ={plusButton} onClick={()=>this.toggle2()}>+</button>

            </div>
          </div>
          <div style={formArea}>
            <div style={catArea}>
            How much will you need?
            {
              this.state.show3?
              <div style={formStyle}>
                <div style = {needBox}>
                  <h3>Technology</h3>
                  <form>
                    How many Computers will you need?  <input type="text" disabled={!this.state.q4c1} id="q8" onChange={this.onTyped} /><br/>
                    How many Tablets will you need?  <input type="text" disabled={!this.state.q4c2} id="q9" onChange={this.onTyped} /><br/>
                    How many Office Phones will you need?  <input type="text" disabled={!this.state.q4c3} id="q10" onChange={this.onTyped} /><br/>
                  </form>
                </div>

                <div style = {needBox}>
                  <h3>Space</h3>
                  <form>
                    How much Office Space will you need (square feet)?  <input type="text" disabled={!this.state.q5c1} id="q11" onChange={this.onTyped} /><br/>
                    How much Event Space will you need (square feet)?  <input type="text" disabled={!this.state.q5c2} id="q12" onChange={this.onTyped} /><br/>
                    How much Training Space will you need (square feet)?  <input type="text" disabled={!this.state.q5c3} id="q13" onChange={this.onTyped} /><br/>
                  </form>
                </div>

                <div style = {needBox}>
                  <h3>Staff</h3>
                  <form>
                    How many Managers will you need?  <input type="text" disabled={!this.state.q7c1} id="q14" onChange={this.onTyped} /><br/>
                    How many Training Specialists will you need?  <input type="text" disabled={!this.state.q7c2} id="q15" onChange={this.onTyped} /><br/>
                    How many Case Workers will you need?  <input type="text" disabled={!this.state.q7c3} id="q16" onChange={this.onTyped} /><br/>
                    How many Community Educators will you need?  <input type="text" disabled={!this.state.q7c4} id="q17" onChange={this.onTyped} /><br/>

                  </form>
                </div>
              </div>
              :null
            }
            </div>
            <div>
              <button style ={plusButton} onClick={()=>this.toggle3()}>+</button>
            </div>
          </div>
          <div style={formArea}>
            <div style={catArea}>
            Activities
            {
              this.state.show4?
              <div style={formStyle}>
                <p>Click the activites your program will do (Mark all that apply)</p>
                <form>
                  Identify Law enforcement agencies <input type="checkbox" id="q18c1" checked={this.state.q18c1} onChange={this.onCheck}/><br/>
                  Identify human trafficking prevention service providers <input type="checkbox" id="q18c2" checked={this.state.q18c2} onChange={this.onCheck}/><br/>
                  Identify potential trainers on human trafficking warning signs<input type="checkbox" id="q18c3" checked={this.state.q18c3} onChange={this.onCheck}/><br/>

                </form>
              </div>
              :null
            }
            </div>
            <div>
              <button style ={plusButton} onClick={()=>this.toggle4()}>+</button>
            </div>
          </div>
          <div style={formArea}>
            <div style={catArea}>
            Report
            {
              this.state.show5?
              <div style = {reportStyle}>
                <div style = {reportCat}>
                  <div style = {reportHead}>
                    Resources
                  </div>
                  <div style = {reportBox}>
                    <div>
                      Technology
                    </div>
                    <div>
                      Computers
                    </div>
                    <div>
                      Tablets
                    </div>
                    <div>
                      Office Phones
                    </div>
                  </div>

                  <div style = {reportBox}>
                    <div>
                      Space
                    </div>
                    <div>
                      Office Space
                    </div>
                    <div>
                      Event Space
                    </div>
                    <div>
                      Training Space
                    </div>
                  </div>

                  <div style = {reportBox}>
                  <div>
                    Staff
                  </div>
                    <div>
                      Managers
                    </div>
                    <div>
                      Training Specialists
                    </div>
                    <div>
                      Case Workers
                    </div>
                    <div>
                      Community Educators
                    </div>
                  </div>
                </div>

                <div style = {reportDet}>
                  <div style = {reportHead}>
                    How many would you need? (#)
                  </div>
                  <div style = {reportBox}>
                  <div>
                    &nbsp;
                  </div>
                    <div>
                      {this.state.q8}
                    </div>
                    <div>
                      {this.state.q9}
                    </div>
                    <div>
                      {this.state.q10}
                    </div>
                  </div>

                  <div style = {reportBox}>
                  <div>
                    &nbsp;
                  </div>
                    <div>
                      {this.state.q11}
                    </div>
                    <div>
                      {this.state.q12}
                    </div>
                    <div>
                      {this.state.q13}
                    </div>
                  </div>
                  <div style = {reportBox}>
                  <div>
                    &nbsp;
                  </div>
                    <div>
                      {this.state.q14}
                    </div>
                    <div>
                      {this.state.q15}
                    </div>
                    <div>
                      {this.state.q16}
                    </div>

                    <div>
                      {this.state.q17}
                    </div>
                  </div>
                </div>


              </div>
              :null
            }
            </div>
            <div>
              <button style ={plusButton} onClick={()=>this.toggle5()}>+</button>
            </div>

          </div>

        </div>
        :null
        }
        {
          this.state.showKnot2?
          <div style={knotQ}>
            <div>
              <h1>Knot 2</h1>
              <p>Identify what to measure</p>
              <p>Based on what your program would do, now is the time to narrow it down by<br/>
                defining your oututs and outcomes!</p>
            </div>
           {/*Knot 2 landing */}

            {
              this.state.showOutput?
              <div>
                <div style = {outputStyle}>
                  How many people will you need? <input type="text" id="k2q1" onChange={this.onTyped}/>
                </div>
                <div style = {outputStyle}>
                  Target <br/>
                  <select>
                    <option id="k2q2o1" onClick={this.onSelect}>Law enforcement</option>
                    <option id="k2q2o2" onClick={this.onSelect}>Services provided</option>
                    <option id="k2q2o3" onClick={this.onSelect}>Victims of human trafficking</option>
                  </select>
                </div>
                <div style = {outputStyle}>
                  Verb <br/>
                  <select>
                    <option id="k2q3o1" onClick={this.onSelect}>Receive</option>
                    <option id="k2q3o2" onClick={this.onSelect}>Participate</option>
                    <option id="k2q3o3" onClick={this.onSelect}>Achieve</option>
                    <option id="k2q3o4" onClick={this.onSelect}>Complete</option>
                    <option id="k2q3o5" onClick={this.onSelect}>Obtain</option>
                    <option id="k2q3o6" onClick={this.onSelect}>Perform</option>
                  </select>
                </div>
                <div style = {outputStyle}>
                  Topic <br/>
                  <select>
                    <option id="k2q4o1" onClick={this.onSelect}>A training on how to identify human trafficking warning signs</option>
                    <option id="k2q4o2" onClick={this.onSelect}>Human trafficking in rural communities</option>
                    <option id="k2q4o3" onClick={this.onSelect}>Human trafficking and domestic violence</option>
                    <option id="k2q4o3" onClick={this.onSelect}>Temporary visa programs</option>
                    <option id="k2q4o4" onClick={this.onSelect}>Working with foreign nationals’ adult victims of human trafficking</option>
                    <option id="k2q4o5" onClick={this.onSelect}>Working with domestic violence adult victims of human trafficking</option>
                    <option id="k2q4o6" onClick={this.onSelect}>Training on how to identify human trafficking warning signs</option>
                  </select>
                </div>
                <div style = {outputStyle}>
                  Frequency <br/>
                  <select>
                    <option id="k2q5o1" onClick={this.onSelect}>once</option>
                    <option id="k2q5o2" onClick={this.onSelect}>twice</option>
                    <option id="k2q5o3" onClick={this.onSelect}>a few times</option>
                    <option id="k2q5o4" onClick={this.onSelect}>multiple times</option>
                  </select>
                  <select>
                    <option id="k2q6o1" onClick={this.onSelect}>a day</option>
                    <option id="k2q6o2" onClick={this.onSelect}>a week</option>
                    <option id="k2q6o3" onClick={this.onSelect}>a month</option>
                    <option id="k2q6o4" onClick={this.onSelect}>a year</option>
                  </select>
                </div>


                <button onClick={()=>this.toggleOutput() } style={gen}>Generate output</button>
              </div>

              :  this.state.showOutcome?

                 <div style={knotQ}>
                   Outcome placeholder
                   <div style={outputStyle}>
                     Set up a percentage criteria (%)<input type="text" id="k2q7" onChange={this.onTyped}/>
                   </div>
                   <div style={outputStyle}>
                     Target <br/>
                     <select>
                       <option id="k2q8o1" onClick={this.onSelect}>Law enforcement </option>
                       <option id="k2q8o2" onClick={this.onSelect}>Service Providers</option>
                       <option id="k2q8o3" onClick={this.onSelect}>Victims of human trafficking</option>
                     </select>
                   </div>
                   <div style={outputStyle}>
                     Verb <br/>
                     <select>
                       <option id="k2q9o1" onClick={this.onSelect}>increase</option>
                       <option id="k2q9o2" onClick={this.onSelect}>descrease</option>
                       <option id="k2q9o3" onClick={this.onSelect}>maintain</option>
                       <option id="k2q9o4" onClick={this.onSelect}>better off</option>
                       <option id="k2q9o5" onClick={this.onSelect}>reduce</option>
                       <option id="k2q9o6" onClick={this.onSelect}>sustain</option>
                     </select>
                   </div>
                     <div style={outputStyle}>
                       Noun <br/>
                       <select>
                         <option id="k2q10o1" onClick={this.onSelect}>knowledge</option>
                         <option id="k2q10o2" onClick={this.onSelect}>attitudes</option>
                         <option id="k2q10o3" onClick={this.onSelect}>strengths</option>
                       </select>
                   </div>

                   <div style={outputStyle}>
                     Frequency <br/>
                     <select>
                       <option id="k2q11o1" onClick={this.onSelect}>after completing the program</option>
                       <option id="k2q11o2" onClick={this.onSelect}>3 months after completing the program</option>
                       <option id="k2q11o3" onClick={this.onSelect}>6 months after completing the program</option>
                     </select>
                 </div>

                 <button onClick={()=>this.toggleOutcome()} style={gen}>Generate outcome</button>
                 </div>
                 :

                 <div style={programStyle}>
                   <div>
                     <h3>Outputs</h3>
                     <ul>
                       <li>Sample output: 25 community outreach events will be provided to Latina women twice a month.</li>
                       <button style={knot2ButtonStyle} onClick={()=>this.toggleOutput()}>{this.state.output}</button>
                     </ul>
                   </div>
                   <div>
                     <h3>Outcomes</h3>
                     <ul>
                       <li>Sample outcome: 85% of applicants will increase their knowledge after completing the training</li>
                       <button style={knot2ButtonStyle} onClick={()=>this.toggleOutcome()}>{this.state.outcome}</button>
                     </ul>
                   </div>
               </div>
 }
          </div>
          :null
        }
        {
          this.state.showKnot3?
          <div style={knotQ}>
            <div>Logic model for Human Trafficking</div>
            <div style={missionBox}>Mission: {this.state.mission}</div>
            <div style={knot3Style}>
              <div style={knot3Box}>
                Inputs<br/><br/>
                <div>
                {this.state.inputs.map(input => <p>{input}</p>)}
                </div>
              </div>

              <div style={arrowStyle}>➡</div>
              <div style={knot3Box}>
                Activities<br/><br/>
                <div>
                {this.state.activites.map(activity => <p>{activity}</p>)}
                </div>
              </div>
              <div style={arrowStyle}>➡</div>
              <div style={knot3Box}>
                Outputs<br/><br/>
                {this.state.output}
              </div>
              <div style={arrowStyle}>➡</div>
              <div style={knot3Box}>
                Effects (Outcomes)<br/><br/>
                {this.state.outcome}
              </div>
            </div>

          </div>
          :null
        }
        </React.Fragment>
      </div>
    );
  }
}

const programStyle = {

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  height: "100vh"

}

const navStyle = {
  flex: 1
}

const knotStyle = {
  flex: 2,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#aaaaaa"
}

const knotQ = {
  flex: 3,
  backgroundColor: "white"
}



const enabled = {
  color: "#EDA85F",
  backgroundColor: "#eeeeee",
  border: "none",
  fontSize: "26px"

}

const disabled = {
  color: "#EDA85F",
  backgroundColor: "#eeeeee",
  border: "none",
  fontSize: "26px"

}

const eBox = {
  flex: 1,
  backgroundColor: "#eeeeee",
  border: "1px #eeeeee solid",
  paddingTop: "5%",
  paddingBottom: "5%",
  margin:"10px",
  borderRadius: "50px"
}

const dBox = {
  flex: 1,
  paddingTop:"5%",
  paddingBottom: "5%",
  margin:"10px",
  backgroundColor: "#eeeeee",
  color: "#1F2E87",
  size: "26px",
  borderRadius: "50px"
}

const formArea = {
  backgroundColor: "#eeeeee",
  border: "1px #aaaaaa solid",
  borderRadius: "8px",
  width: "90%",
  margin: "auto",
  marginBottom: "4px",
  display: "flex",
  flexDirection: "row",
  padding: "5px"
}

const catArea = {
  flex: 8
}

const plusButton = {
  flex: 1,
  color: "white",
  backgroundColor: "#F7921C",
  borderRadius: "20px",
  border: '0'
}

const formStyle = {
  borderTop: "1px black solid",
  textAlign :"left"
}

const needBox = {
  color: "#060606"
}
const reportStyle = {
  display: "flex",
  flexDirection: "row"
}

const reportCat = {
  flex: 2
}

const reportDet = {
  flex: 2
}

const reportBox = {
  backgroundColor: "white",
  border: "1px black solid",
  marginBottom: "10px"
}

const reportHead = {
  backgroundColor: "#A3ADDB"
}

const titleStyle = {
  color: "#F7921C"
}

const headStyle = {
  fontSize: "22px",
}

const phStyle = {
  margin: "auto",
  marginTop: "220px",
  backgroundColor:  "#1F2E87",
  width: "80%",
  color: "#eeeeee",
  borderRadius: "20px",
  fontSize: "32px"

}

const knot2ButtonStyle = {
  color: "#EDA85F",
  backgroundColor: "#ffffff",
  border: "0"
}

const outputStyle = {
  textAlign: "left",
  backgroundColor: "#aaaaaa",
  padding: "5px",
  margin: "5px"
}

const selectStyle = {
  width: "100%"
}

const select2 = {
  width: "49.5%",

}

const split2 = {
  display: "flex",
  justifyContent: "space-around"
}

const checkStyle = {
  flex: 1
}

const checkBox = {
  display: "flex",
  flexDirection: "row"
}

const checkText = {
  flex: 4
}

const nextStyle = {
  width: "60%",
  backgroundColor: "#A3ADDB"
}

const threeByTwo = {
  display: "flex",
  flexDirection: "column",
}

const split6 = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around"
}

const split3 = {

  flex: 1
}

const knot3Style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",

}

const knot3Box = {
  flex: 1,
  border: "2px black solid",
  padding: "10px",
  height: "500px",
  margin: "20px"
}

const arrowStyle = {
  marginTop:"15%"
}

const missionBox = {
  border: "2px black solid",
  width: "95%",
  margin: "auto"
}

const factsBox = {
  border: "2px black solid",
  width: "95%",
  margin: "auto"
}

const gen = {
  border: '0',
  color: '#EDA85F',
  backgroundColor: '#4D5CA2',
  borderRadius: '30px',
  height: '40px'
}
