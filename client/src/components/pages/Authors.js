import React, { Component } from 'react';
import maritza from '../../Pictures/maritza.png';
import maria from '../../Pictures/maria.png';
import './Authors.css';
import Header from './../../components/layout/Header';
import Footer from './../../components/layout/Footer';

class Authors extends Component {
  render () {
    return (
      <div style={authorsPage}>
      <Header/>
      <React.Fragment>
        <div style={authors}>
          <div class='authorContainer1'>
            <div class='authorBox1'>
              <img src = {maritza} />
            </div>
            <div class ='authorBox2'>
              <h1 style={h1}>Maritza Concha, PHD</h1>
              <p>Maritza Concha holds a PhD in Public Affairs with a Concentration
              in Public Administration from University of Central Florida, a Master’s
               degree in Latin American Studies at the University of Miami and a
               Bachelor’s degree in International Relations at Florida International
               University. For the past 13 years, Dr. Concha has been working as an
               evaluator for local non-profits, serving Latino/a immigrants. Her other
               areas of interest are service partnerships and evaluating projects that
               serve at risk populations such as victims of human trafficking, refugees,
               and low income minorities.</p>
            </div>
          </div>

          <div class='authorContainer2'>
            <div class ='authorBox3'>
              <h1 style={h1}>Maria Elena Villar</h1>
              <p>Maria Elena Villar holds a Ph.D. in Communication and a Master in
              Public Health from University of Miami, and a Bachelor’s degree in
              Economics from Columbia University. Her experience includes program
              evaluation at the national and international level as well as strategic
              communication for social change. Prior to co-founding Covian Consulting,
              Inc., she was the Director of Research at the Partnership for the Study
              and Prevention of Violence at the University of Miami and a Senior Research
              Scientist at the Institute for Child Health Policy at Nova Southeastern University.
              A published researcher, Dr. Villar is an associate professor at Florida International University.</p>
            </div>
            <div class='authorBox4'>
              <img src = {maria} />
            </div>
          </div>

        </div>

      </React.Fragment>
      <Footer/>
      </div>
    );
  }
}
export default Authors;

const authorsPage = {
  background: "#f8dabc",
  minHeight: '100vh'
}

const authors = {
    background: "#f8dabc",
    minHeight: '80vh'
}


const h1 = {
  color: "#EDA85F",
  fontWeight: 'bold'
}
