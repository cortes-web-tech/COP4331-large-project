import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashNav from './../layout/DashNav';
import html2canvas from 'html2canvas'

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
    }
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
            <button style = {enabled} onClick={()=>this.toggleKnot1()}>
                <p>Knot 1</p>
                Understand your program
              </button>
          </div>

          <div style={eBox}>

            <button style = {enabled} onClick={()=>this.toggleKnot2()}>
              <p>Knot 2 </p>
              Identify what to measure
            </button>
          </div>

          <div style={dBox}>
            <button style = {disabled} onClick={()=>this.toggleKnot3()}>
              <p>Knot 3</p>
              Track performance
            </button>
          </div>

          <div style={dBox}>

              <p>Knot 4 </p>
              Resource library

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
                <div style = {checkBox}>
                  <div style = {checkText}>
                    Provide comprehensive short term services to victims of human trafficking
                  </div>
                  <div style = {checkStyle}>
                    <input type="checkbox" />
                  </div>
                </div>

                <div style = {checkBox}>

                  <div style = {checkText}>
                    Promote collaboration and coordination of services
                  </div>
                  <div style = {checkStyle}>
                    <input type="checkbox" />
                  </div>
                </div>

                <div style = {checkBox}>

                  <div style = {checkText}>
                    Provide trainings on human trafficking victims topics
                  </div>
                  <div style = {checkStyle}>
                    <input type="checkbox" />
                  </div>
                </div>

                <div style = {checkBox}>
                  <div style = {checkText}>
                    Create awareness about human traffic
                  </div>
                  <div style = {checkStyle}>
                    <input type="checkbox" />
                  </div>
                </div>

                <div style = {checkBox}>
                  <div style = {checkText}>
                    Provide trainings on human trafficking victims topics
                  </div>
                  <div style = {checkStyle}>
                    <input type="checkbox" />
                  </div>
                </div>

                <input type="submit" style = {nextStyle} value="Next"/>
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
            <h2 style ={headStyle}>Program Resources</h2>

            {
              this.state.show2?
              <form style={formStyle}>
                <h3>Technology </h3>
                <div style = {threeByTwo}>
                  <div style = {split6}>
                    <div style ={split3}>
                      <div><input style = {checkStyle} type="checkbox" /></div>
                      <div><p>&nbsp;Computers</p></div>
                    </div>
                    <div style ={split3}>
                      <div><input style = {checkStyle}  type="checkbox" /></div>
                      <div><p>&nbsp;Website</p></div>
                    </div>
                    <div style ={split3}>
                      <div><input style = {checkStyle}  type="checkbox" /></div>
                      <div><p>&nbsp;Database</p></div>
                    </div>
                  </div>

                  <div style = {split6}>
                    <div style ={split3}>
                      <div><input style = {checkStyle}  type="checkbox" /></div>
                      <div>&nbsp;Tablets</div>
                      </div>
                      <div style ={split3}>
                        <div><input style = {checkStyle} type="checkbox" /></div>
                        <div><p>&nbsp;Canopies</p></div>
                      </div>
                      <div style ={split3}>
                        <div><input style = {checkStyle} type="checkbox" /></div>
                        <div><p>&nbsp;Other</p></div>
                      </div>
                    </div>
                  </div>

                <h3> Space </h3>
                <div style = {threeByTwo}>
                  <div style = {split6}>
                    <div style ={split3}>
                      <div><input style = {checkStyle}  type="checkbox" /></div>
                      <div>&nbsp;Office Space</div>
                    </div>
                    <div style ={split3}>
                      <div><input style = {checkStyle} type="checkbox" /></div>
                      <div><p>&nbsp;Temporary space</p></div>
                    </div>
                    <div style ={split3}>
                      <div><input style = {checkStyle} type="checkbox" /></div>
                      <div><p>&nbsp;Canopies</p></div>
                    </div>
                  </div>
                  <div style = {split6}>
                    <div style ={split3}>
                      <div><input style = {checkStyle}  type="checkbox" /></div>
                      <div>&nbsp;Training Space</div>
                    </div>
                    <div style ={split3}>
                      <div><input style = {checkStyle} type="checkbox" /></div>
                      <div><p>&nbsp;Option 5</p></div>
                    </div>
                    <div style ={split3}>
                      <div><input style = {checkStyle} type="checkbox" /></div>
                      <div><p>&nbsp;Other</p></div>
                    </div>
                  </div>
                </div>
                <h3> Materials </h3>
                <div style = {threeByTwo}>
                  <div style = {split6}>
                    <div style ={split3}>
                      <div><input style = {checkStyle}  type="checkbox" /></div>
                      <div>&nbsp;Training</div>
                    </div>
                    <div style ={split3}>
                      <div><input style = {checkStyle} type="checkbox" /></div>
                      <div><p>&nbsp;Outreach</p></div>
                    </div>
                    <div style ={split3}>
                      <div><input style = {checkStyle} type="checkbox" /></div>
                      <div><p>&nbsp;Office supplies</p></div>
                    </div>
                  </div>
                  <div style = {split6}>
                    <div style ={split3}>
                      <div><input style = {checkStyle}  type="checkbox" /></div>
                      <div>&nbsp;Service delivery</div>
                    </div>
                    <div style ={split3}>
                      <div><input style = {checkStyle} type="checkbox" /></div>
                      <div><p>&nbsp;Option 5</p></div>
                    </div>
                    <div style ={split3}>
                      <div><input style = {checkStyle} type="checkbox" /></div>
                      <div><p>&nbsp;Other</p></div>
                    </div>
                  </div>
                </div>

                <h3> Staff </h3>
                <div style = {threeByTwo}>
                  <div style = {split6}>
                    <div style ={split3}>
                      <div><input style = {checkStyle}  type="checkbox" /></div>
                      <div>&nbsp;Program Manager</div>
                    </div>
                    <div style ={split3}>
                      <div><input style = {checkStyle} type="checkbox" /></div>
                      <div><p>&nbsp;Training specialist</p></div>
                    </div>
                    <div style ={split3}>
                      <div><input style = {checkStyle} type="checkbox" /></div>
                      <div><p>&nbsp;Option 3</p></div>
                    </div>
                  </div>
                  <div style = {split6}>
                    <div style ={split3}>
                      <div><input style = {checkStyle}  type="checkbox" /></div>
                      <div>&nbsp;Case worker</div>
                    </div>
                    <div style ={split3}>
                      <div><input style = {checkStyle} type="checkbox" /></div>
                      <div><p>&nbsp;Community education</p></div>
                    </div>
                    <div style ={split3}>
                      <div><input style = {checkStyle} type="checkbox" /></div>
                      <div><p>&nbsp;Other</p></div>
                    </div>
                  </div>
                </div>

                <h3> Other </h3>
                <textarea style = {other2Style}></textarea> <br/>

                <input type="submit" style = {nextStyle} value="Next"/>
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
            <h2 style ={headStyle}>How much will you need?</h2>

            {
              this.state.show3?
              <div style={formStyle}>
                <div style = {needBox}>
                  <h3>Technology</h3>
                  <form>
                    <div>
                      <div style={other3Style}>
                        <div style={techTextBox}>How many Computers will you need?</div>
                        <div style={techInputBox}><input type="text"/></div>
                      </div>
                      <div style={other3Style}>
                        <div style={techTextBox}>How many Tablets will you need?</div>
                        <div style={techInputBox}><input type="text"/></div>
                      </div>
                    </div>
                  </form>
                </div>

                <div style = {needBox}>
                  <h3>Space</h3>
                  <form>
                    <div>
                      <div style={other3Style}>
                        <div style={techTextBox}>How much Office Space will you need?</div>
                        <div style={techInputBox}><input type="text"/></div>
                      </div>
                    </div>
                  </form>
                </div>

                <div style = {needBox}>
                  <h3>Staff</h3>
                  <form>
                    <div>
                      <div style={other3Style}>
                        <div style={techTextBox}>How many Case Workers will you need?</div>
                        <div style={techInputBox}><input type="text"/></div>
                      </div>
                      <div style={other3Style}>
                        <div style={techTextBox}>How many Community Educators will you need? </div>
                        <div style={techInputBox}><input type="text"/></div>
                      </div>
                    </div>
                  </form>
                  <input type="submit" style = {nextStyle} value="Next"/>
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
            <h2 style ={headStyle}>Activities</h2>

            {
              this.state.show4?
              <div style={formStyle}>
                <p>Click the activites your program will do (Mark all that apply)</p>
                <form>
                  <div style = {checkBox}>
                    <div style = {checkText}>
                      Identify Law enforcement agencies
                    </div>
                    <div style = {checkStyle}>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div style = {checkBox}>
                    <div style = {checkText}>
                      Identify human trafficking prevention service providers
                    </div>
                    <div style = {checkStyle}>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div style = {checkBox}>
                    <div style = {checkText}>
                      Identify potential trainers on human trafficking warning signs
                    </div>
                    <div style = {checkStyle}>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div style = {checkBox}>
                    <div style = {checkText}>
                      Other
                    </div>
                    <div style = {checkStyle}>
                      <input type="checkbox" />
                    </div>
                  </div>
                </form>
                <input type="submit" style = {nextStyle} value="Next"/>
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
            <h2 style ={headStyle}>Report</h2>
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
                  <div style={split2}>
                    How many people will you need?
                  </div>
                  <div style={split2}>
                     <input type="text"/>
                  </div>
                </div>
                <div style = {outputStyle}>
                  <div>Target</div>
                  <div>
                    <select style ={selectStyle}>
                      <option>Law enforcement</option>
                      <option>Services provided</option>
                      <option>Victims of human trafficking</option>
                    </select>
                  </div>
                </div>
                <div style = {outputStyle}>
                  <div>Verb</div>
                  <div>
                    <select style = {selectStyle}>
                      <option>Receive</option>
                      <option>Participate</option>
                      <option>Achieve</option>
                      <option>Complete</option>
                      <option>Obtain</option>
                      <option>Perform</option>
                    </select>
                  </div>
                </div>
                <div style = {outputStyle}>
                  Topic <br/>
                  <select style ={selectStyle}>
                    <option>A training on how to identify human trafficking warning signs</option>
                    <option>Human trafficking in rural communities</option>
                    <option>Human trafficking and domestic violence</option>
                    <option>Temporary visa programs</option>
                    <option>Working with foreign nationals’ adult victims of human trafficking</option>
                    <option>Working with domestic violence adult victims of human trafficking</option>
                    <option>Training on how to identify human trafficking warning signs</option>
                    <option>😳?</option>
                  </select>
                </div>
                <div style = {outputStyle}>
                  Frequency <br/>
                  <div style = {split2}>
                    <select style = {select2}>
                      <option>once</option>
                      <option>twice</option>
                      <option>a few times</option>
                      <option>multiple times</option>
                    </select>
                    <select style = {select2}>
                      <option>a day</option>
                      <option>a week</option>
                      <option>a month</option>
                      <option>a year</option>
                    </select>
                  </div>
                </div>
                <button onClick={()=>this.toggleOutput()}>Generate output</button>
              </div>
              :  this.state.showOutcome?

                <div style={knotQ}>
                  Outcome placeholder
                  <div style={outputStyle}>
                    Set up a percentage criteria <input type="text"/>
                  </div>
                  <div style={outputStyle}>
                    Target <br/>
                    <select style={selectStyle}>
                      <option>Target op 1 </option>
                      <option>Target op 2</option>
                    </select>
                  </div>
                  <div style={outputStyle}>
                    Verb <br/>
                    <select style={selectStyle}>
                      <option> Verb op 1</option>
                      <option> Verb op 2</option>
                    </select>
                  </div>
                    <div style={outputStyle}>
                      Noun <br/>
                      <select style={selectStyle}>
                        <option>Noun op 1</option>
                        <option>Noun op 2</option>
                      </select>
                  </div>

                  <div style={outputStyle}>
                    Frequency <br/>
                    <select style={selectStyle}>
                      <option>Frquency op 1</option>
                      <option>Frequency op 2</option>
                    </select>
                </div>
                <button onClick={()=>this.toggleOutcome()}>Generate outcome</button>
                </div>
                :

                <div style={programStyle}>
                  <div>
                    <h3>Outputs</h3>
                    <ul>
                      <li>Sample output: 25 community outreach events will be provided to Latina women twice a month.</li>
                      <button style={knot2ButtonStyle} onClick={()=>this.toggleOutput()}>+ Click here to create an output</button>
                    </ul>
                  </div>
                  <div>
                    <h3>Outcomes</h3>
                    <ul>
                      <li>Sample outcome: 85% of applicants will increase their knowledge after completing the training</li>
                      <button style={knot2ButtonStyle} onClick={()=>this.toggleOutcome()}>+ Click here to create an outcome</button>
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
            <div style={missionBox}>Mission: Please describe the mission of your organization here</div>
            <div style={knot3Style}>
              <div style={knot3Box}>
                Inputs
              </div>

              <div style={arrowStyle}>➡</div>
              <div style={knot3Box}>
                Activities
              </div>
              <div style={arrowStyle}>➡</div>
              <div style={knot3Box}>
                Outputs
              </div>
              <div style={arrowStyle}>➡</div>
              <div style={knot3Box}>
                Effects (Outcomes)
              </div>
            </div>
            <div style={factsBox}>
              External factors: Please write any external facotrs that may  affect the implementation of your program
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
}

const formStyle = {
  borderTop: "1px black solid"
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
  border: "none"
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

  flex: 1,
  display: "flex",
  flexDirection: "row"
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
  height: "200px",
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

const other2Style = {
  width: "400px",
  height: "150px",
  wordWrap: "initial"
}

const other3Style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "5px"
}

const techTextBox = {
  flex: 3
}

const techInputBox = {
  flex: 1
}
