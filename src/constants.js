export const DEFAULT_GENRE = `All genres`;

export const EMAIL_REGEX = RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

export const BASE_URL = `https://htmlacademy-react-3.appspot.com`;

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  MOVIE: `/films/:id`,
  ADD_REVIEW: `/films/:id/review`,
  VIDEO_PLAYER: `/player/:id`,
};

export const Tab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const FilmsCount = {
  STEP: 8,
  INITIAL_MAIN: 8,
  INITIAL_SIMILAR: 4,
};

export const RatingDescription = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very Good`,
  AWESOME: `Awesome`,
};

export const ErrorText = {
  EMAIL: `Please enter a valid email address.`,
  PASSWORD: `Please enter a valid password.`
};

export const InputName = {
  EMAIL: `email`,
  PASSWORD: `password`,
};

export const FavoriteStatus = {
  YES: 1,
  NO: 0,
};

export const CommentLength = {
  MIN: 50,
  MAX: 400,
};
