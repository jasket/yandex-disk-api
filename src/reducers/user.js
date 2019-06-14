import { USER } from "../actions/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER.SET_USER:
      return {
        ...state,
        login: action.login
      };
    case USER.LOAD_USER:
      return {
        ...state,
        login: action.login
      };
    default:
      return state;
  }
}
