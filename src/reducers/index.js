import { combineReducers } from "redux";
import user from "./user";
import oauth from "./oauth";
import disk from "./disk";

const rootReducer = combineReducers({
  user,
  oauth,
  disk
});

export default rootReducer;
