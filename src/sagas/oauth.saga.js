import { put, takeEvery } from "redux-saga/effects";
import { OAUTH } from "../actions/actionTypes";
import { userActions, diskActions } from "../actions/index";

function* onLogoutApp() {
  yield put(userActions.setUserData());
  yield put(diskActions.setDiskData());
  yield put(diskActions.setCurrentFolder());
}

function* onLogout() {
  yield takeEvery(OAUTH.CLEAR_TOKEN, onLogoutApp);
}

export const oauthSagas = [onLogout()];
