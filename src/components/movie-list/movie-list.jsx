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
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((movie, index) => {
          return index < 8
            ? (<MovieCard
              key={`${movie.name}-${index}`}
              movie={movie}
              onCardMouseEnter={() => {
                this.setState({card: movie});
              }}
            />)
            : false;
        })}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.array,
};

export default MovieList;
