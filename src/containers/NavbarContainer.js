import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { loadUserData, clearAccessToken } from "../actions";
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
        logout={() => {
          clearAccessToken();
          this.props.history.push("/login");
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
    loadUserData: () => dispatch(loadUserData()),
    clearAccessToken: () => dispatch(clearAccessToken())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavbarContainer)
);
