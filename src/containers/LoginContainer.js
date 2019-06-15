import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/Login";

import * as OauthApi from "../api/oauth";

class FolderContainer extends Component {
  render() {
    return (
      <>
        <Login logout={this.props.logout} onLogin={this.props.onLogin}></Login>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    logout: state.oauth.logout,
    onLogin: OauthApi.getOauthToken
  };
};

export default connect(mapStateToProps)(FolderContainer);
