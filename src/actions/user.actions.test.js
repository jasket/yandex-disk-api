import * as actions from "./user.actions";
import * as types from "./actionTypes";

describe("oauth actions", () => {
  it("should create an action to init user info", () => {
    const expectedAction = {
      type: types.USER.LOAD_USER
    };
    expect(actions.loadUserData()).toEqual(expectedAction);
  });

  it("should create an action to set user data", () => {
    const login = "user";
    const expectedAction = {
      type: types.USER.SET_USER,
      login
    };
    expect(actions.setUserData(login)).toEqual(expectedAction);
  });
});
