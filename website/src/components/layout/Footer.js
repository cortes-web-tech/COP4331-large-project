import React from 'react';
import { Container, Row, Col} from 'reactstrap';

function Footer(){
  const col1 = ["About Us", "Contact", "Terms & Conditions"];

  const col2 = ["Facebook", "Twitter", "Instagram"];
  const listItems = col1.map((l_item) =>
    <li>{l_item}</li>
  );

  const listItems2 = col2.map((l_item2) =>
    <li>{l_item2}</li>
  );
    return(
      <Container>
      <div style ={footerStyle} className="container">

      <Row>
        <Col>
          <ul style={linkStyle}>{listItems}</ul>
          <ul style={linkStyle}>{listItems2}</ul>
          <p>©️ Covian Consulting, Inc. All Rights Reserved.</p>
        </Col>

        <Col>
          <p>Subscrive to our newsletter</p>
          <form>
            <label>
              <input placeholder="Enter your email" type="text" name="name" />
              <input type="submit" value="Submit"/>
            </label>
          </form>
        </Col>

        <Col>
          <p>3259 Progress Drive <br/>
            Orlando, FL, 32824</p>
        </Col>
      </Row>
        </div>
        </Container>

  )

}

const linkStyle = {
  color: '#ffffff',
  listStyle: 'none'
}

const footerStyle = {
  textDecoration: 'none',
  opacity: '1.0',
  background: "#3a53e0",
  // height: "10%",
  color: '#ffffff',
  fontSize: "36px",

  padding: '10px',

}
export default Footer
