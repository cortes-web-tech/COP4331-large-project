import React, { Component } from 'react';
import maritza from '../../Pictures/maritza.png';
import maria from '../../Pictures/maria.png';


class Authors extends Component {
  render () {
    return (
      <React.Fragment>
      <div style={style}>
        <div style = {bio}>
            <h1 style={name1}>Maritza Concha, PHD</h1>
            <img className="float-left" src={maritza} style={pic1} />
            <p style={textBox1}>Maritza Concha holds a PhD in Public Affairs with a Concentration in Public Administration from University of Central Florida, a Master’s degree in Latin American Studies at the University of Miami and a Bachelor’s degree in International Relations at Florida International University. For the past 13 years, Dr. Concha has been working as an evaluator for local non-profits, serving Latino/a immigrants. Her other areas of interest are service partnerships and evaluating projects that serve at risk populations such as victims of human trafficking, refugees, and low income monitories.</p>
        </div>

        <div style = {bio}>
            <img className="float-right" style = {pic2} src={maria} />
            <h1 style={name2}>Maria Elena Villar</h1>
            <p style={textBox2}>Maria Elena Villar holds a Ph.D. in Communication and a Master in Public Health from University of Miami, and a Bachelor’s degree in Economics from Columbia University. Her experience includes program evaluation at the national and international level as well as strategic communication for social change. Prior to co-founding Covian Consulting, Inc., she was the Director of Research at the Partnership for the Study and Prevention of Violence at the University of Miami and a Senior Research Scientist at the Institute for Child Health Policy at Nova Southeastern University. A published researcher, Dr. Villar is an associate professor at Florida International University.</p>
        </div>
      </div>

      </React.Fragment>
    );
  }
}
export default Authors;

const style = {
  padding: 0,
  color: '#ffffff',
  textAlign: 'center',
  width: "100%",
  fontSize: "12px",
  marginLeft: "auto",
  marginRight: "auto",
  height: "100%",
  backgroundColor: "#f8dabc",
  backgroundSize: "cover",
  minHeight: '100%'
}

const textBox1 = {
  fontSize: "2em",
  color: "#4D5CA2",
  textAlign: 'right',
  paddingRight: '10em',
  paddingLeft: '10em',
  textOverflow: 'ellipsis'
}

const textBox2 = {
  fontSize: "2em",
  color: "#4D5CA2",
  textAlign: 'left',
  paddingRight: '10em',
  paddingLeft: '10em',
  textOverflow: 'ellipsis'
}

const name1 = {
  color: "#fbb368",
  textAlign: 'right',
  paddingRight: '10em'
}

const name2 = {
  color: "#fbb368",
  textAlign: 'left',
  paddingLeft: '10em'
}

const bio = {
  background: 'white',
  height: '35em',
  marginLeft: '5em',
  marginRight: '5em',
  marginBottom: '5em'
}

const pic1 = {
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
  paddingLeft: '10em',
}

const pic2 = {
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
  paddingRight: '10em',
  padding: '2em'
}
