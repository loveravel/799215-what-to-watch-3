import React from "react";
import PropTypes from "prop-types";

import withVideoPlayer from "../../hocs/with-video-player/with-video-player.js";

import MovieCard from "../movie-card/movie-card.jsx";


const WrappedMovieCard = withVideoPlayer(MovieCard);


const MovieList = (props) => {
  const {films, filmsCount, message} = props;

  const filmsForShow = filmsCount ? films.slice(0, filmsCount) : films;

  if (films.length === 0) {
    return (
      <p>{message}</p>
    );
  }

  return (
    <div className="catalog__movies-list">
      {
        filmsForShow.map((movie, index) => {
          return (
            <WrappedMovieCard
              key={`${movie.name}-${index}`}
              movie={movie}
              movieID={movie.id}
              isPlaying={false}
              isMuted={true}
              isPreviewMode={true}
            />
          );
        })
      }
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    posterImage: PropTypes.string,
    genre: PropTypes.string,
  })),
  filmsCount: PropTypes.number,
  message: PropTypes.string.isRequired,
};

export default MovieList;
