import * as actions from "./oauth.actions";
import * as types from "./actionTypes";

describe("oauth actions", () => {
  it("should create an action to init tokens", () => {
    const expectedAction = {
      type: types.OAUTH.GET_TOKEN
    };
    expect(actions.initAccessToken()).toEqual(expectedAction);
  });

  it("should create an action to set token info", () => {
    const oauth = { name: "token" };
    const expectedAction = {
      type: types.OAUTH.SET_TOKEN,
      oauth
    };
    expect(actions.saveAccessToken(oauth)).toEqual(expectedAction);
  });

  it("should create an action to clear token info", () => {
    const expectedAction = {
      type: types.OAUTH.CLEAR_TOKEN
    };
    expect(actions.clearAccessToken()).toEqual(expectedAction);
  });
});
