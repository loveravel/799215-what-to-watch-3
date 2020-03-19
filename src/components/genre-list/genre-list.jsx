import React from "react";
import PropTypes from "prop-types";

const GenreList = (props) => {
  const {genres, genreFilter} = props;
  const {onGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item${genre === genreFilter ? ` catalog__genres-item--active` : ``}`}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onGenreClick(evt.target.text);
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  genreFilter: PropTypes.string,
  onGenreClick: PropTypes.func,
};

export default GenreList;

