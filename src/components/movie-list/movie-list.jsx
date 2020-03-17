import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

const FilmsCount = {
  STEP: 8,
  INITIAL_MAIN: 8,
  INITIAL_SIMILAR: 4,
};

class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentGenre: `All genres`,
      numberOfFilms: FilmsCount.INITIAL_MAIN,
    };

    this._getMoreFilms = this._getMoreFilms.bind(this);
  }

  componentDidMount() {
    if (this.props.genres) {
      this.setState({
        numberOfFilms: FilmsCount.INITIAL_MAIN,
      });
    } else {
      this.setState({
        numberOfFilms: FilmsCount.INITIAL_SIMILAR,
        currentGenre: this.props.films[0].genre,
      });
    }
  }

  _getListHeader(genres) {
    if (!genres) {
      return <h2 className="catalog__title">More like this</h2>;
    } else {
      return (
        <React.Fragment>
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            {genres.map((genre) => (
              <li key={genre} className={`catalog__genres-item${genre === this.state.currentGenre ? ` catalog__genres-item--active` : ``}`}>
                <a
                  href="#"
                  className="catalog__genres-link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    this.setState({
                      currentGenre: evt.target.text,
                    });
                  }}
                >
                  {genre}
                </a>
              </li>
            ))}
          </ul>
        </React.Fragment>
      );
    }
  }

  _getMoreFilms() {
    this.setState({
      numberOfFilms: this.state.numberOfFilms + FilmsCount.STEP,
    });
  }

  _getMoreButton(films, genres) {
    if (!genres || films.length <= this.state.numberOfFilms) {
      return ``;
    } else {
      return (
        <div className="catalog__more">
          <button
            className="catalog__button"
            type="button"
            onClick={this._getMoreFilms}
          >
            Show more
          </button>
        </div>
      );
    }
  }

  _filterFilmsByGenre(films, genre) {
    if (genre === `All genres`) {
      return films;
    }

    return films.filter((movie) => {
      return movie.genre === genre;
    });
  }

  render() {
    const {films, genres} = this.props;

    const filteredFilms = this._filterFilmsByGenre(films, this.state.currentGenre);

    return (
      <section className={`catalog${!genres ? ` catalog--like-this` : ``}`}>

        {
          this._getListHeader(genres)
        }

        <div className="catalog__movies-list">
          {filteredFilms.map((movie, index) => {
            return index < this.state.numberOfFilms
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

        {
          this._getMoreButton(filteredFilms, genres)
        }

      </section>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    posterImage: PropTypes.string,
    genre: PropTypes.string,
  })),
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default MovieList;
