import React from 'react';
import './../../App.css';
import { Container, Row, Col, Button,  InputGroup, Input,} from 'reactstrap';


function Footer(){
  const col1 = ["About Us", "Contact", "Terms & Conditions"];

  const col2 = ["Facebook", "Twitter", "Instagram"];
  const listItems = col1.map((l_item) =>
    <li><a href="">{l_item}</a></li>
  );

  const listItems2 = col2.map((l_item2) =>
    <li><a href="">{l_item2}</a></li>
  );
    return(

      // {/*

      <div style ={footerStyle} className="footerContainer">
        <div className="box1">
        < br/>
        < br/>

          <div className="pageLinks">
          <ul style={linkStyle}>{listItems}</ul>
          <ul style={linkStyle}>{listItems2}</ul>
          </div>
          <p>©️ 2019 Covian Consulting, Inc. All Rights Reserved.</p>
        </div>
        <div className="box2">
        < br/>
        < br/>

          <p>Subscribe to our newsletter</p>
          <form>
            <label>
              <InputGroup>
                <Input id="emailInputStyle" style={emailInputStyle} placeholder="Email Address"/>
                <Button style={buttonStyle}>OK</Button>
              </InputGroup>
            </label>

          </form>
        </div>
        <div className="box3">
        < br/>
        < br/>
          <ul style={addressStyle}>
          <li>3259 Progress Drive</li>
          <li>Orlando, FL 32824</li>
          </ul>

        </div>
        </div>

      // */}
  )

}
const addressStyle = {
  listStyleType:'none',
}
const emailInputStyle = {
  backgroundColor:"#3a43b0",
  borderColor:"#EDA85F",
  color:'white',

}

const buttonStyle = {
  backgroundColor:'#EDA85F',
  position:'relative',
}
const linkStyle = {

  listStyle: 'none',
  textAlign: 'left'
}

const footerStyle = {
  opacity: '1.0',
  background: "#3a43b0",
  height: "190px",
  color: '#ffffff',
  fontSize:'10pt',

}


export default Footer
