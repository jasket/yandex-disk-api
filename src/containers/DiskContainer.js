import React, { Component } from "react";
import { connect } from "react-redux";
import {
  initDiskData,
  initFolderData,
  setCurrentFolder
} from "../actions/index";
import Directory from "../components/Directory";
import DiskInfo from "../components/DiskInfo";

class DiskContainer extends Component {
  componentWillMount() {
    this.props.initDiskData();
  }

  render() {
    if (!this.props.disk.data) {
      return <span className="text-secondary">Данные отсутствуют</span>;
    }

    let items = [];
    if (!!this.props.disk.folder && !!this.props.disk.folder._embedded) {
      items = this.props.disk.folder._embedded.items;
    }

    return (
      <>
        <DiskInfo data={this.props.disk.data}></DiskInfo>
        <Directory folder={this.props.disk.folder} items={items}></Directory>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    disk: state.disk
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initDiskData: () => dispatch(initDiskData()),
    initFolderData: () => dispatch(initFolderData()),
    setCurrentFolder: path => dispatch(setCurrentFolder(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiskContainer);
