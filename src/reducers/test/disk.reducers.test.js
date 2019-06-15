import reducer from "../disk.reducers";
import * as types from "../../actions/actionTypes";

describe("disk reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({ current: "/" });
  });

  it("should return the disk data", () => {
    const data = { name: "" };
    expect(reducer(data, types.DISK.SET_DATA)).toEqual({
      name: ""
    });
  });

  it("should return the folder data", () => {
    const folder = { name: "" };
    expect(reducer(folder, types.DISK.SET_FOLDER_DATA)).toEqual({
      name: ""
    });
  });

  it("should return the folder current", () => {
    const current = "/abc/def";
    expect(reducer(current, types.DISK.SET_CURRENT_FOLDER)).toEqual("/abc/def");
  });
});
