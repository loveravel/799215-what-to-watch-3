import React from "react";
import PropTypes from "prop-types";

import MovieReview from "../movie-review/movie-review.jsx";

const MovieReviews = (props) => {
  const {reviews} = props;

  if (reviews.length === 0) {
    return (
      <div className="movie-card__reviews movie-card__row">
        No reviews
      </div>
    );
  }

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.slice(0, Math.ceil(reviews.length / 2)).map((review, index) =>
          <MovieReview
            key={`${review.date}-${index}`}
            user={review.user}
            rating={review.rating}
            comment={review.comment}
            date={review.date}
          />
        )}
      </div>
      <div className="movie-card__reviews-col">
        {reviews.slice(Math.ceil(reviews.length / 2)).map((review, index) =>
          <MovieReview
            key={`${review.date}-${index}`}
            user={review.user}
            rating={review.rating}
            comment={review.comment}
            date={review.date}
          />
        )}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.array,
};

export default MovieReviews;
