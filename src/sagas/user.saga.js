import { call, put, takeEvery, select } from "redux-saga/effects";
import { USER } from "../actions/actionTypes";
import { userActions, oauthActions } from "../actions";
import * as UserApi from "../api/user";

export const getToken = state => state.oauth.access_token;

export function* onFetchUserData() {
  try {
    const token = yield select(getToken);
    const response = yield call(UserApi.fetchUser, token);
    yield put(userActions.setUserData(response.login));
  } catch (error) {
    yield put(oauthActions.clearAccessToken());
  }
}

export function* onLoadUserData() {
  yield takeEvery(USER.LOAD_USER, onFetchUserData);
}

export const userSagas = [onLoadUserData()];
