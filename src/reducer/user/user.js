import ModelUser from "../../api/model-user.js";
import history from "../../history.js";
import {Operation as DataOperation} from "../data/data.js";

const AuthorizationStatus = {
  AUTH: true,
  NO_AUTH: false,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {},
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER: `SET_USER`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: user
  }),
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUser(response.data));
        dispatch(DataOperation.loadFavorites());
      })
      .catch((err) => {
        throw err;
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUser(response.data));
        dispatch(DataOperation.loadFavorites());
        history.push(`/`);
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_USER:
      return Object.assign({}, state, {
        userData: ModelUser.parseUser(action.payload),
      });
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};
