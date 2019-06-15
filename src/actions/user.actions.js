import { USER } from "../actions/actionTypes";

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
