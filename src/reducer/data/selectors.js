import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {DEFAULT_GENRE, MAX_GENRES_COUNT, FilmsCount} from "../../constants.js";

export const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

export const getPromoMovie = (state) => {
  return state[NameSpace.DATA].promoMovie;
};

export const getFilmsCount = (state) => {
  return state[NameSpace.DATA].filmsCount;
};

export const getMovie = (state, id) => {
  return state[NameSpace.DATA].films.find(
      (movie) => movie.id === Number(id)
  );
};

export const getCurrentGenre = (state) => {
  return state[NameSpace.DATA].currentGenre;
};

export const getGenres = (state) => {
  return [...new Set(
      [
        DEFAULT_GENRE,
        ...state[NameSpace.DATA].films.map((movie) => movie.genre),
      ]
  )].slice(0, MAX_GENRES_COUNT);
};

export const getFavoritesFilms = (state) => {
  return state[NameSpace.DATA].favorites;
};

export const getReviews = (state) => {
  return state[NameSpace.DATA].reviews;
};

export const getFilteredFilms = createSelector(
    getFilms,
    getCurrentGenre,
    (films, currentGenre) => {
      if (currentGenre === DEFAULT_GENRE) {
        return films;
      }
      const filteredFilms = films.filter((film) => film.genre === currentGenre);
      return filteredFilms;
    }
);

export const getSimilarFilms = createSelector(
    getFilms,
    getMovie,
    (films, movie) => {
      if (!movie) {
        return [];
      }
      return films.filter((film) => {
        return film.id !== movie.id && film.genre === movie.genre;
      }).slice(0, FilmsCount.INITIAL_SIMILAR);
    }
);
