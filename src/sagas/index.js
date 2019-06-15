import { all, call, put, takeEvery, select } from "redux-saga/effects";
import { USER, OAUTH, DISK } from "../actions/actionTypes";
import {
  setUserData,
  clearAccessToken,
  setDiskData,
  setDiskFolder,
  setCurrentFolder
} from "../actions/index";
import * as UserApi from "../api/user";
import * as DiskApi from "../api/disk";

export const getToken = state => state.oauth.access_token;
export const getCurrentFolder = state => state.disk.current;

export function* onFetchUserData() {
  try {
    const token = yield select(getToken);
    const response = yield call(UserApi.fetchUser, token);
    yield put(setUserData(response.login));
  } catch (error) {
    yield put(clearAccessToken());
  }
}

export function* onFetchDiskData() {
  try {
    const token = yield select(getToken);
    const response = yield call(DiskApi.fetchDiskData, token);
    yield put(setDiskData(response));
  } catch (error) {
    yield put(setDiskData({}));
  }
}

export function* onFetchDiskFolder() {
  try {
    const token = yield select(getToken);
    const path = yield select(getCurrentFolder);
    const response = yield call(DiskApi.fetchDiskFolder, token, path);
    yield put(setDiskFolder(response));
  } catch (error) {
    yield put(setDiskFolder({}));
  }
}

export function* onLogoutApp() {
  yield put(setUserData());
  yield put(setDiskData());
  yield put(setCurrentFolder());
}

export function* onLoadUserData() {
  yield takeEvery(USER.LOAD_USER, onFetchUserData);
}

export function* onLoadDiskData() {
  yield takeEvery(DISK.INIT_DATA, onFetchDiskData);
}

export function* onLoadDiskFolder() {
  yield takeEvery(DISK.INIT_FOLDER, onFetchDiskFolder);
}

export function* onLogout() {
  yield takeEvery(OAUTH.CLEAR_TOKEN, onLogoutApp);
}

export default function* rootSaga() {
  yield all([
    onLogout(),
    onLoadUserData(),
    onLoadDiskData(),
    onLoadDiskFolder()
  ]);
}
