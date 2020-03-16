import React from "react";
import PropTypes from "prop-types";
import MovieReview from "../movie-review/movie-review.jsx";

const MovieReviews = (props) => {
  const {reviews} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review, index) =>
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
        {reviews.map((review, index) =>
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
