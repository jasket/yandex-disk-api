import { call, put, takeEvery, select } from "redux-saga/effects";
import { DISK } from "../actions/actionTypes";
import { diskActions } from "../actions/index";
import * as DiskApi from "../api/disk";

export const getToken = state => state.oauth.access_token;
export const getCurrentFolder = state => state.disk.current;

export function* onFetchDiskData() {
  try {
    const token = yield select(getToken);
    const response = yield call(DiskApi.fetchDiskData, token);
    yield put(diskActions.setDiskData(response));
  } catch (error) {
    yield put(diskActions.setDiskData({}));
  }
}

export function* onFetchDiskFolder() {
  try {
    const token = yield select(getToken);
    const path = yield select(getCurrentFolder);
    const response = yield call(DiskApi.fetchDiskFolder, token, path);
    yield put(diskActions.setDiskFolder(response));
  } catch (error) {
    yield put(diskActions.setDiskFolder({}));
  }
}

export function* onLoadDiskData() {
  yield takeEvery(DISK.INIT_DATA, onFetchDiskData);
}

export function* onLoadDiskFolder() {
  yield takeEvery(DISK.INIT_FOLDER, onFetchDiskFolder);
}

export const diskSagas = [onLoadDiskFolder(), onLoadDiskData()];
