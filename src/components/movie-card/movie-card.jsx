import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {name, previewImage, onCardMouseEnter, onCardClick} = props;
  return (
    <article onMouseEnter={onCardMouseEnter} onClick={onCardClick} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img
          src={previewImage}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="#">
          {name}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  name: PropTypes.string,
  previewImage: PropTypes.string,
  onCardMouseEnter: PropTypes.func,
  onCardClick: PropTypes.func,
};

export default MovieCard;


