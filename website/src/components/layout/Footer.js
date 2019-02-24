import React from 'react';
import './../../App.css';
import { Container, Row, Col} from 'reactstrap';


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
          <div className="pageLinks">
          <ul style={linkStyle}>{listItems}</ul>
          <ul style={linkStyle}>{listItems2}</ul>
          </div>
          <p>©️ Covian Consulting, Inc. All Rights Reserved.</p>
        </div>
        <div className="box2">
          <p>Subscrive to our newsletter</p>
          <form>
            <label>
              <input placeholder="Enter your email" type="text" name="name" />
              <input type="submit" value="Submit"/>
            </label>
          </form>
        </div>
        <div className="box3">
          <p>3259 Progress Drive</p>
          <p>Orlando, FL, 32824</p>
        </div>
      </div>

      // */}
  )

}

const linkStyle = {
  listStyle: 'none',
  textAlign: 'left'
}

const footerStyle = {
  borderRadius: '20px',
  opacity: '1.0',
  background: "#3a43b0",
  // height: "10%",
  color: '#ffffff',
  fontSize: "20px",
}
export default Footer
