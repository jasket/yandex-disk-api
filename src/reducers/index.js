import { combineReducers } from "redux";
import user from "./user.reducers";
import oauth from "./oauth.reducers";
import disk from "./disk.reducers";

const rootReducer = combineReducers({
  user,
  oauth,
  disk
});

export default rootReducer;
