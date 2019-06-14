import React, { Component } from "react";
import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavbarContainer from "./containers/NavbarContainer";
import LoginContainer from "./containers/LoginContainer";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarContainer />

        <Container>
          <Row className="row mt-2">
            <Col xs={12}>
              <Route exact path="/" component={NavbarContainer} />
              <Route exact path="/login" component={LoginContainer} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
