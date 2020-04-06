import {reducer, ActionType} from "./app.js";

const initialState = {
  networkFailed: null
};

describe(`network-failed reducer works correctly`, () => {

  it(`Should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`REQUEST_FAIL`, () => {
    const action = {
      type: ActionType.REQUEST_FAIL,
      payload: 404,
    };

    expect(reducer(initialState, action)).toEqual({networkFailed: 404});
  });
});
