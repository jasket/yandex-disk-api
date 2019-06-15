import { DISK } from "../actions/actionTypes";

export function initDiskData() {
  return {
    type: DISK.INIT_DATA
  };
}

export function setDiskData(data) {
  return {
    type: DISK.SET_DATA,
    data
  };
}

export function initFolderData() {
  return {
    type: DISK.INIT_FOLDER
  };
}

export function setDiskFolder(folder) {
  return {
    type: DISK.SET_FOLDER_DATA,
    folder
  };
}

export function setCurrentFolder(path) {
  return {
    type: DISK.SET_CURRENT_FOLDER,
    path
  };
}
