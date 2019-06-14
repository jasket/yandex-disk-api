import { USER_INIT } from "../actions/actionTypes";
import { RENDER_TODO_LIST } from "../actions";

const initialState = {
  user: { name: "anonim" }
};

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case USER_INIT:
      return {
        ...state,
        user: state.user
      };
    case RENDER_TODO_LIST:
      return {
        ...state,
        toDoList: action.toDoList
      };
    default:
      return state;
  }
}
