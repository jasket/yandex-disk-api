import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { userActions, oauthActions } from "../actions";
import { withRouter } from "react-router-dom";

class NavbarContainer extends Component {
  componentDidMount() {
    this.props.loadUserData();
  }

  render() {
    const { user, clearAccessToken } = this.props;
    return (
      <Navbar
        name={user}
        onLogout={() => {
          clearAccessToken();
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUserData: () => dispatch(userActions.loadUserData()),
    clearAccessToken: () => dispatch(oauthActions.clearAccessToken())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavbarContainer)
);
