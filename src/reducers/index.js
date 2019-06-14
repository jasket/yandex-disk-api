import { combineReducers } from "redux";
import user from "./user";
import oauth from "./oauth";

const rootReducer = combineReducers({
  user,
  oauth
});

export default rootReducer;
