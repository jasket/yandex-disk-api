import { OAUTH } from "../actions/actionTypes";

const LS_ACCESS_TOKEN = "LS_ACCESS_TOKEN";
const LS_EXPIRES_IN = "LS_EXPIRES_IN";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case OAUTH.SET_TOKEN:
      localStorage.setItem(LS_ACCESS_TOKEN, action.oauth.access_token);
      localStorage.setItem(LS_EXPIRES_IN, action.oauth.expires_in);
      return {
        ...state,
        access_token: action.oauth.access_token,
        expires_in: action.oauth.expires_in
      };
    case OAUTH.CLEAR_TOKEN:
      localStorage.removeItem(LS_ACCESS_TOKEN);
      localStorage.removeItem(LS_EXPIRES_IN);
      return {
        ...state,
        access_token: null,
        expires_in: null
      };
    case OAUTH.GET_TOKEN:
      const access_token = localStorage.getItem(LS_ACCESS_TOKEN);
      const expires_in = localStorage.getItem(LS_EXPIRES_IN);
      return {
        ...state,
        access_token: access_token,
        expires_in: expires_in
      };
    default:
      return state;
  }
}
