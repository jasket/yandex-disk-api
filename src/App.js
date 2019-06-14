import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavbarContainer from "./containers/NavbarContainer";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarContainer />

        <Container fluid={true}>
          <Row className="row">
            <Col xs={12}>
              <h2>Files:</h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
