import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: null,
    };
  }

  render() {
    const {films, onCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((movie, index) => {
          return index < 8
            ? (<MovieCard
              key={`${movie.name}-${index}`}
              name={movie.name}
              previewImage={movie.previewImage}
              onCardMouseEnter={() => {
                this.setState({card: movie});
              }}
              onCardClick={onCardClick}
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
    page: PropTypes.string
  })),
  onCardClick: PropTypes.func,
};

export default MovieList;
