import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/data/data.js";
import {getFilmsCount, getCurrentGenre, getPromoMovie, getFilteredFilms, getGenres} from "../../reducer/data/selectors.js";

import PageFooter from "../page-footer/page-footer.jsx";
import MoviePromo from "../movie-promo/movie-promo.jsx";
import PageHeader from "../page-header/page-header.jsx";
import ButtonMore from "../button-more/button-more.jsx";
import GenreList from "../genre-list/genre-list.jsx";
import MovieList from "../movie-list/movie-list.jsx";


const Main = (props) => {
  const {films, filmsCount, movie, currentGenre, genres} = props;
  const {onGenreClick} = props;

  if (!movie) {
    return null;
  }

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src={movie.backgroundImage}
            alt={movie.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader additionalClass="movie-card__head" />

        <MoviePromo
          movie={movie}
          isFavorite={movie.isFavorite}
        />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList
            genres={genres}
            genreFilter={currentGenre}
            onGenreClick={onGenreClick}
          />

          <MovieList
            films={films}
            genreFilter={currentGenre}
            filmsCount={filmsCount}
            message="No films"
          />

          <ButtonMore/>
        </section>

        <PageFooter/>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  }),
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    posterImage: PropTypes.string,
    genre: PropTypes.string,
  })),
  filmsCount: PropTypes.number,
  currentGenre: PropTypes.string,
  onGenreClick: PropTypes.func,
  genres: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = (state) => ({
  films: getFilteredFilms(state),
  promoFilm: getPromoMovie(state),
  currentGenre: getCurrentGenre(state),
  filmsCount: getFilmsCount(state),
  genres: getGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
