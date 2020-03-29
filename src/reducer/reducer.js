import {extend} from '../utils.js';
import films from '../mocks/films.js';

export const initialState = {
  genreFilter: `All genres`,
  films,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genreFilter: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType};
