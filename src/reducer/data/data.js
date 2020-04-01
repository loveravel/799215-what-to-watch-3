import {extend} from "../../utils.js";
import ModelMovie from "../../api/model-movie.js";
import {DEFAULT_GENRE, FilmsCount} from "../../constants.js";

const initialState = {
  films: [],
  promoMovie: null,
  currentGenre: DEFAULT_GENRE,
  filmsCount: FilmsCount.INITIAL_MAIN,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  INCREMENT_FILMS_COUNT: `INCREMENT_FILMS_COUNT`,
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  },
  loadPromoMovie: (movie) => {
    return {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: movie,
    };
  },
  changeGenre: (genre) => {
    return {
      type: ActionType.CHANGE_GENRE,
      payload: genre,
    };
  },
  incrementFilmsCount: (count) => {
    return {
      type: ActionCreator.INCREMENT_FILMS_COUNT,
      payload: count,
    };
  }
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.data));
      });
  },
  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoMovie(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: ModelMovie.parseFilms(action.payload),
      });
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: ModelMovie.parseMovie(action.payload),
      });
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        currentGenre: action.payload,
      });
    case ActionType.INCREMENT_FILMS_COUNT:
      return extend(state, {
        filmsCount: state.filmsCount + FilmsCount.STEP,
      });
  }

  return state;
};

export {
  reducer,
  Operation,
  ActionType,
  ActionCreator
};
