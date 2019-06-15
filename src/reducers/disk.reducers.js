import { DISK } from "../actions/actionTypes";

const initialState = { current: "/" };

export default function(state = initialState, action) {
  switch (action.type) {
    case DISK.SET_DATA:
      return {
        ...state,
        data: action.data
      };
    case DISK.SET_FOLDER_DATA:
      return {
        ...state,
        folder: action.folder
      };
    case DISK.SET_CURRENT_FOLDER:
      return {
        ...state,
        current: action.path
      };
    default:
      return state;
  }
}
