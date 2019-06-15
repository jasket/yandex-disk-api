import { all } from "redux-saga/effects";
import { oauthSagas } from "./oauth.saga";
import { userSagas } from "./user.saga";
import { diskSagas } from "./disk.saga";

export default function* rootSaga() {
  yield all([...oauthSagas, ...userSagas, ...diskSagas]);
}
