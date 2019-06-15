import React, { Component } from "react";
import { connect } from "react-redux";
import PathBar from "../components/PathBar";

class PathContainer extends Component {
  render() {
    if (!this.props.disk.current) {
      return "";
    }

    return (
      <>
        <PathBar data={this.props.disk.current}></PathBar>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    disk: state.disk
  };
};

export default connect(mapStateToProps)(PathContainer);
