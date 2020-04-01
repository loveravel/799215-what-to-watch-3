import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

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

export const getDataParam = createSelector(
    getFilms,
    getPromoMovie,
    getCurrentGenre,
    (films) => {
      return films.filter((it) => it.type === `genre`);
    }
);
