import {reducer, ActionType} from "./user.js";
import {AuthorizationStatus} from "../../constants.js";
import ModelUser from "../../api/model-user.js";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {},
};

const user = {
  "id": 1,
  "avatar_url": `/wtw/static/avatar/6.jpg`,
  "email": `denis@yandex.ru`,
  "name": `Denis`,
};

const adaptedUser = ModelUser.parseUser(user);

describe(`authorization reducer works correctly`, () => {
  it(`Should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`SET_USER`, () => {
    const action = {
      type: ActionType.SET_USER,
      payload: user,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          userData: adaptedUser,
        }));
  });

  it(`REQUIRE_AUTHORIZATION`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });
  });
});
