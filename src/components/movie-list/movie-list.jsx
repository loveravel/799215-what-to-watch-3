import React from "react";
import PropTypes from "prop-types";

import {FilmsCount} from "../../constants.js";

import MovieCard from "../movie-card/movie-card.jsx";

class MovieList extends React.PureComponent {
  _filterFilmsByGenre(films, genre) {
    if (genre === `All genres`) {
      return films;
    }

    return films.filter((movie) => {
      return movie.genre === genre;
    });
  }

  render() {
    const {films, genreFilter, showedFilms} = this.props;

    const filteredFilms = this._filterFilmsByGenre(films, genreFilter);

    return (
      <div className="catalog__movies-list">
        {filteredFilms.map((movie, index) => {
          return index < showedFilms
            ? (<MovieCard
              key={`${movie.name}-${index}`}
              name={movie.name}
              previewImage={movie.previewImage}
              previewVideo={movie.previewVideo}
              onCardClick={() => {}}
            />)
            : false;
        })}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    posterImage: PropTypes.string,
    genre: PropTypes.string,
  })),
  genreFilter: PropTypes.string,
  showedFilms: PropTypes.number,
};

export default MovieList;
