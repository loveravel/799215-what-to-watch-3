import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {DEFAULT_GENRE} from "../../constants.js";

export const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

export const getPromoMovie = (state) => {
  return state[NameSpace.DATA].promoMovie;
};

export const getFilmsCount = (state) => {
  return state[NameSpace.DATA].filmsCount;
};

export const getCurrentGenre = (state) => {
  return state[NameSpace.DATA].currentGenre;
};

export const getFavoritesFilms = (state) => {
  return state[NameSpace.DATA].favorites;
};

export const getFilteredFilms = createSelector(
    getFilms,
    getCurrentGenre,
    getFilmsCount,
    (films, currentGenre, filmsCount) => {
      if (currentGenre === DEFAULT_GENRE) {
        return films;
      }

      const filteredFilms = films.filter((film) => film.genre === currentGenre);
      return filteredFilms;
    }
);
