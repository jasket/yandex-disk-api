import { OAUTH, USER, DISK } from "../actions/actionTypes";

export function initAccessToken() {
  return {
    type: OAUTH.GET_TOKEN
  };
}

export function saveAccessToken(oauth) {
  return {
    type: OAUTH.SET_TOKEN,
    oauth
  };
}

export function clearAccessToken() {
  return {
    type: OAUTH.CLEAR_TOKEN
  };
}

export function setUserData(login) {
  return {
    type: USER.SET_USER,
    login
  };
}

export function loadUserData() {
  return {
    type: USER.LOAD_USER
  };
}

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
