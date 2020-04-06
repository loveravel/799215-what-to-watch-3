import {extend} from "../../utils.js";

const initialState = {
  networkFailed: null
};

const ActionType = {
  REQUEST_FAIL: `REQUEST_FAIL`,
};

const ActionCreator = {
  requestFail: (error) => {
    return {
      type: ActionType.REQUEST_FAIL,
      payload: error
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUEST_FAIL:
      return extend(state, {
        networkFailed: action.payload
      });
  }

  return state;
};

export {
  reducer,
  ActionType,
  ActionCreator
};
