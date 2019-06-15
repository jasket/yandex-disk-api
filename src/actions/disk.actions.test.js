import * as actions from "./disk.actions";
import * as types from "./actionTypes";

describe("disk actions", () => {
  it("should create an action to set disk info", () => {
    const data = { name: "disk" };
    const expectedAction = {
      type: types.DISK.SET_DATA,
      data
    };
    expect(actions.setDiskData(data)).toEqual(expectedAction);
  });

  it("should create an action to start init disk info", () => {
    const expectedAction = {
      type: types.DISK.INIT_DATA
    };
    expect(actions.initDiskData()).toEqual(expectedAction);
  });

  it("should create an action to start init folder", () => {
    const expectedAction = {
      type: types.DISK.INIT_FOLDER
    };
    expect(actions.initFolderData()).toEqual(expectedAction);
  });

  it("should create an action to set folder data", () => {
    const folder = { name: "disk" };
    const expectedAction = {
      type: types.DISK.SET_FOLDER_DATA,
      folder
    };
    expect(actions.setDiskFolder(folder)).toEqual(expectedAction);
  });

  it("should create an action to set current folder path", () => {
    const path = "/disk/disk";
    const expectedAction = {
      type: types.DISK.SET_CURRENT_FOLDER,
      path
    };
    expect(actions.setCurrentFolder(path)).toEqual(expectedAction);
  });
});
