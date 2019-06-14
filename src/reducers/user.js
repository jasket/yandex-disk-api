import { USER_INIT } from "../actions/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_INIT:
      return {
        ...state,
        user: state.user
      };
    default:
      return state;
  }
}
