import React from "react";
import PropTypes from "prop-types";

const RatingDescription = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very Good`,
  AWESOME: `Awesome`,
};

const getRatingDescription = (rating) => {
  if (rating <= 3) {
    return RatingDescription.BAD;
  } else if (rating <= 5) {
    return RatingDescription.NORMAL;
  } else if (rating <= 8) {
    return RatingDescription.GOOD;
  } else if (rating < 10) {
    return RatingDescription.VERY_GOOD;
  } else if (rating === 10) {
    return RatingDescription.AWESOME;
  }

  return null;
};

const MovieOverview = (props) => {
  const {movie} = props;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingDescription(movie.rating)}</span>
          <span className="movie-rating__count">{movie.scoresCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        {movie.description}

        <p className="movie-card__director">
          <strong>Director: {movie.director}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>Starring: {movie.starring.map((actor) => actor).join(`, `)}</strong>
        </p>
      </div>
    </React.Fragment>
  );
};

MovieOverview.propTypes = {
  movie: PropTypes.object
};

export default MovieOverview;
