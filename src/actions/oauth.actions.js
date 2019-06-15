import { OAUTH } from "../actions/actionTypes";

export function initAccessToken() {
  return {
    type: OAUTH.GET_TOKEN
  };
}

export function saveAccessToken(oauth) {
  return {
    type: OAUTH.SET_TOKEN,
    oauth
  };
}

export function clearAccessToken() {
  return {
    type: OAUTH.CLEAR_TOKEN
  };
}
