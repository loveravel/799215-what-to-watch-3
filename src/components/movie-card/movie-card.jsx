import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {movie, onCardMouseEnter} = props;
  return (
    <article key={movie.name} onMouseEnter={onCardMouseEnter} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img
          src={movie.posterImage}
          alt={movie.name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={`${movie.page}.html`}>
          {movie.name}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    posterImage: PropTypes.string,
    page: PropTypes.string,
  }),
  onCardMouseEnter: PropTypes.func,
};

export default MovieCard;
