import {extend} from "../../utils.js";
import ModelMovie from "../../api/model-movie.js";
import {DEFAULT_GENRE, FilmsCount, FavoriteStatus} from "../../constants.js";
import history from "../../history.js";

const initialState = {
  films: [],
  promoMovie: null,
  currentGenre: DEFAULT_GENRE,
  filmsCount: FilmsCount.INITIAL_MAIN,
  favorites: [],
  reviews: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  INCREMENT_FILMS_COUNT: `INCREMENT_FILMS_COUNT`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  ADD_TO_FAVORITES: `ADD_TO_FAVORITES`,
  REMOVE_FROM_FAVORITES: `REMOVE_FROM_FAVORITES`,
  TOGGLE_FAVORITE: `TOGGLE_FAVORITE`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  ADD_REVIEW: `ADD_REVIEW`,
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
      type: ActionType.INCREMENT_FILMS_COUNT,
      payload: count,
    };
  },
  loadFavorites: (films) => {
    return {
      type: ActionType.LOAD_FAVORITES,
      payload: films,
    };
  },
  addToFavorites: (movie) => {
    return {
      type: ActionType.ADD_TO_FAVORITES,
      payload: movie,
    };
  },
  removeFromFavorites: (id) => {
    return {
      type: ActionType.REMOVE_FROM_FAVORITES,
      payload: id,
    };
  },
  toggleFavorite: (movie) => {
    return {
      type: ActionType.TOGGLE_FAVORITE,
      payload: movie,
    };
  },
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },
  addReview: (review) => {
    return {
      type: ActionType.ADD_REVIEW,
      payload: review,
    };
  },
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
  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(response.data));
      });
  },
  toggleFavorite: (id, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${status}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionCreator.toggleFavorite(response.data));

          if (status === FavoriteStatus.YES) {
            dispatch(ActionCreator.addToFavorites(response.data));
          } else {
            dispatch(ActionCreator.removeFromFavorites(id));
          }
        }
      });
  },
  loadReviews: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      });
  },
  addReview: (id, review, onFormSuccess) => (dispatch, getState, api) => {
    return api.post(`/comments/${id}`, review)
      .then((response) => {
        dispatch(ActionCreator.addReview(response.data));
        onFormSuccess();
        setTimeout(() => {
          history.push(`/films/${id}`);
        }, 1500);
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
    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: ModelMovie.parseFilms(action.payload),
      });
    case ActionType.TOGGLE_FAVORITE:
      const updatedMovie = ModelMovie.parseMovie(action.payload);

      const index = state.films.findIndex((movie) => {
        return movie.id === updatedMovie.id;
      });

      const updatedFilms = state.films.slice();
      updatedFilms[index] = updatedMovie;

      return extend(state, {
        films: updatedFilms,
        promoMovie: state.promoMovie.id === updatedMovie.id ? updatedMovie : state.promoMovie,
      });
    case ActionType.ADD_TO_FAVORITES:
      return extend(state, {
        favorites: [...state.favorites, action.payload],
      });
    case ActionType.REMOVE_FROM_FAVORITES:
      return extend(state, {
        favorites: state.favorites.filter((movie) => movie.id !== action.payload),
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.ADD_REVIEW:
      return extend(state, {
        reviews: [...action.payload],
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
