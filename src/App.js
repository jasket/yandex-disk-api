import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavbarContainer from "./containers/NavbarContainer";
import LoginContainer from "./containers/LoginContainer";
import store from "./store";
import { saveAccessToken } from "./actions";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarContainer />

        <Container>
          <Row className="row mt-2">
            <Col xs={12}>
              <Route exact path="/" component={LoginContainer} />
              <Route exact path="/login" component={LoginContainer} />
              <Route
                exact
                path="/token"
                render={() => {
                  const hashData = name =>
                    new RegExp(`${name}=([^&]+)`).exec(
                      document.location.hash
                    )[1];
                  const access_token = hashData("access_token");
                  const expires_in = hashData("expires_in");
                  store.dispatch(saveAccessToken({ access_token, expires_in }));
                  return <Redirect to="/" />;
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
