import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

const MovieList = (props) => {
  const {films} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((movie, index) => {
        return index < 8
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
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    posterImage: PropTypes.string,
  })),
};

export default MovieList;
