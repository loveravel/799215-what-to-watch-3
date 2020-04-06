import {reducer, ActionType} from "./data.js";
import {FilmsCount, DEFAULT_GENRE} from "../../constants.js";
import {reviews as movieReviews} from "../../mocks/test-data.js";
import ModelMovie from "../../api/model-movie.js";

const initialState = {
  films: [],
  promoMovie: null,
  currentGenre: DEFAULT_GENRE,
  filmsCount: FilmsCount.INITIAL_MAIN,
  favorites: [],
  reviews: [],
};

const films = [{
  "name": ``,
  "poster_image": ``,
  "preview_image": ``,
  "background_image": ``,
  "background_color": ``,
  "description": ``,
  "rating": 8.8,
  "scores_count": null,
  "director": ``,
  "starring": [``, ``, `D`],
  "run_time": null,
  "genre": `crime`,
  "released": 2002,
  "id": 1,
  "is_favorite": false,
  "video_link": ``,
  "preview_video_link": ``
}];

const adaptedFilms = ModelMovie.parseFilms(films);

describe(`Data reducer works correctly`, () => {

  it(`Should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`LOAD_FILMS`, () => {
    const action = {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          films: adaptedFilms,
        }));
  });

  it(`LOAD_FAVORITES`, () => {
    const action = {
      type: ActionType.LOAD_FAVORITES,
      payload: films,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          favorites: adaptedFilms,
        }));
  });

  it(`TOGGLE_FAVORITE`, () => {

    const action = {
      type: ActionType.TOGGLE_FAVORITE,
      payload: Object.assign({}, films[0], films[0][`isFavorite`] = true),
    };

    expect(reducer(Object.assign({}, initialState, {films: adaptedFilms, promoMovie: films[0]}), action)).toEqual(
        Object.assign({}, initialState, {
          films: adaptedFilms,
          promoMovie: adaptedFilms[0]
        }));
  });

  it(`ADD_TO_FAVORITES`, () => {
    const action = {
      type: ActionType.ADD_TO_FAVORITES,
      payload: films[0],
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          favorites: [films[0]],
        }));
  });

  it(`REMOVE_FROM_FAVORITES`, () => {
    const action = {
      type: ActionType.REMOVE_FROM_FAVORITES,
      payload: 1,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {favorites: [films[0]]}, {
          favorites: [],
        }));
  });

  it(`LOAD_PROMO_MOVIE`, () => {
    const action = {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: films[0],
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          promoMovie: adaptedFilms[0],
        }));
  });

  it(`INCREMENT_FILMS_COUNT`, () => {
    const action = {
      type: ActionType.INCREMENT_FILMS_COUNT,
      payload: FilmsCount.STEP,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          filmsCount: FilmsCount.INITIAL_MAIN + FilmsCount.STEP,
        }));
  });

  it(`LOAD_REVIEWS`, () => {
    const action = {
      type: ActionType.LOAD_REVIEWS,
      payload: movieReviews,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          reviews: movieReviews,
        }));
  });

  it(`ADD_REVIEW`, () => {
    const action = {
      type: ActionType.ADD_REVIEW,
      payload: movieReviews,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          reviews: movieReviews,
        }));
  });

  it(`CHANGE_GENRE`, () => {
    const action = {
      type: ActionType.CHANGE_GENRE,
      payload: `Drama`,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          currentGenre: `Drama`,
        }));
  });
});
