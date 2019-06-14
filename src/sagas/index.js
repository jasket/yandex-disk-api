import { all, call, put, takeEvery, select } from "redux-saga/effects";
import { USER } from "../actions/actionTypes";
import { setUserData } from "../actions/index";
import * as UserApi from "../api/user";

export const getToken = state => state.oauth.access_token;

export function* fetchUserData() {
  try {
    const token = yield select(getToken);
    const response = yield call(UserApi.fetchUser, token);
    yield put(setUserData(response.login));
  } catch (error) {
    yield put(setUserData(null));
  }
}

export function* loadUserData() {
  yield takeEvery(USER.LOAD_USER, fetchUserData);
}

export default function* rootSaga() {
  yield all([loadUserData()]);
}
