import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavbarContainer from "./containers/NavbarContainer";
import LoginContainer from "./containers/LoginContainer";
import DiskContainer from "./containers/DiskContainer";
import PathContainer from "./containers/PathContainer";
import store from "./store";
import { saveAccessToken, setCurrentFolder, initFolderData } from "./actions";

class App extends Component {
  render() {
    return (
      <div>
        <LoginContainer />
        <NavbarContainer />
        <PathContainer />

        <Container>
          <Row className="row mt-2">
            <Col xs={12}>
              <Switch>
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
                    store.dispatch(
                      saveAccessToken({ access_token, expires_in })
                    );
                    return <Redirect to="/" />;
                  }}
                />
                <Route
                  path="*"
                  render={props => {
                    let pathname = document.location.pathname;
                    store.dispatch(setCurrentFolder(decodeURI(pathname)));
                    store.dispatch(initFolderData());
                    return <DiskContainer {...props} />;
                  }}
                />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
