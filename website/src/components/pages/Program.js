import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashNav from './../layout/DashNav';
import Knot1 from './../knots/Knot1';

export default class Program extends React.Component {
  constructor(){
    super()
    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    }
  }

  toggle1(){
    this.setState({
      ...this.state,
      show1: !this.state.show1,
    })
  }

  toggle2(){
    this.setState({
      ...this.state,
      show2: !this.state.show2,
    })
  }

  toggle3(){
    this.setState({
      ...this.state,
      show3: !this.state.show3,
    })
  }

  toggle4(){
    this.setState({
      ...this.state,
      show4: !this.state.show4,
    })
  }

  toggle5(){
    this.setState({
      ...this.state,
      show5: !this.state.show5,
    })
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
            <p>Human Trafficking</p>
            </div>

          <div style={eBox}>
            <Link to="/knot1" style = {enabled}>Knot 1 Understand your program </Link>
          </div>

          <div style={dBox}>
            <p>Knot 2 Identify what to measure </p>
          </div>

          <div style={dBox}>
            <p>Knot 3 Track performance</p>
          </div>

          <div style={dBox}>
            <p>Knot 4 Resource library</p>
          </div>
        </div>
        <div style={knotQ}>
          <div>
            <h1>Knot 1</h1>
            <p>Understand your program</p>
          </div>

          <div style={formArea}>
            <div style={catArea}>
            Program characteristics
            {
              this.state.show1?
              <form style={formStyle}>
                <input type="checkbox" /> Provide comprehensive short term services to victims of human trafficking <br/>
              	<input type="checkbox" /> Promote collaboration and coordination of services<br/>
              	<input type="checkbox" /> Provide trainings on human trafficking victims topics<br/>
              	<input type="checkbox" /> Create awareness about human traffic<br/>
              	<input type="checkbox" /> Provide trainings on human trafficking victims topics<br/>
                <input type="submit" value="Next"/>
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
              <div>
                <div style = {needBox}>
                  <h3>Technology</h3>
                  <form>
                    How many Computers will you need?  <input type="text"/><br/>
                    How many Tablets will you need?  <input type="text"/>
                  </form>
                </div>

                <div style = {needBox}>
                  <h3>Space</h3>
                  <form>
                    How much Office Space will you need?  <input type="text"/>
                  </form>
                </div>

                <div style = {needBox}>
                  <h3>Staff</h3>
                  <form>
                    How many Case Workers will you need?  <input type="text"/><br/>
                    How many Community Educators will you need?  <input type="text"/>
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
              <div>
                <p>Click the activites your program will do (Mark all that apply)</p>
                <form>
                  Identify Law enforcement agencies <input type="checkbox"/><br/>
                  Identify human trafficking prevention service providers <input type="checkbox"/><br/>
                  Identify potential trainers on human trafficking warning signs<input type="checkbox"/><br/>
                  Other <input type="checkbox"/><br/>
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
                  </div>

                  <div style = {reportBox}>
                    <div>
                      Space
                    </div>
                    <div>
                      Office Space
                    </div>
                  </div>

                  <div style = {reportBox}>
                    <div>
                      Staff
                    </div>
                    <div>
                      Case Worker
                    </div>
                    <div>
                      Community Educator
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
                      5
                    </div>
                    <div>
                      3
                    </div>
                  </div>

                  <div style = {reportBox}>
                    <div>
                      &nbsp;
                    </div>
                    <div>
                      2400 SqFt.
                    </div>
                  </div>
                  <div style = {reportBox}>
                    <div>
                      &nbsp;
                    </div>
                    <div>
                      10
                    </div>
                    <div>
                      2
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

        </React.Fragment>
      </div>
    );
  }
}

const programStyle = {
  backgroundColor: "#cceeff",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: "100vh"

}

const navStyle = {
  flex: 1
}

const knotStyle = {
  flex: 3,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#D6D6D6"
}

const knotQ = {
  flex: 3,
  backgroundColor: "white"
}



const enabled = {
  color: "#EDA85F",

}

const eBox = {
  flex: 1,
  backgroundColor: "#eeeeee",
  border: "1px #eeeeee solid",
}

const dBox = {
  flex: 1,
  border: "1px #eeeeee solid",
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
}

const formStyle = {

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
