import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getFilms, getFilmsCount, getCurrentGenre} from "../../reducer/data/selectors.js";


import GenreList from "../genre-list/genre-list.jsx";
import MovieList from "../movie-list/movie-list.jsx";
import ButtonMore from "../button-more/button-more.jsx";

const Catalog = (props) => {
  const {films, filmsCount, currentGenre} = props;
  const {onGenreClick} = props;

  if (!films) {
    return null;
  }

  const genres = [...new Set([`All genres`, ...films.map((film) => film.genre)])];

  const getCatalogHeader = () => {
    if (filmsCount === 4) {
      return <h2 className="catalog__title">More like this</h2>;
    } else {
      return (
        <React.Fragment>
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList
            genres={genres}
            genreFilter={currentGenre}
            onGenreClick={onGenreClick}
          />
        </React.Fragment>
      );
    }
  };

  return (
    <section className={`catalog${filmsCount === 4 ? ` catalog--like-this` : ``}`}>

      {
        getCatalogHeader()
      }

      <MovieList
        films={films}
        genreFilter={currentGenre}
        showedFilms={filmsCount}
      />

      <ButtonMore />

    </section>
  );
};

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    posterImage: PropTypes.string,
    genre: PropTypes.string,
  })),
  filmsCount: PropTypes.number,
  currentGenre: PropTypes.string,
  onGenreClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  filmsCount: getFilmsCount(state),
  currentGenre: getCurrentGenre(state),
});

const mapDispatchToProps = (dispatch) =>({
  onGenreClick(genreFilter) {
    dispatch({
      type: `CHANGE_GENRE`,
      payload: genreFilter,
    });
  },
});

export {Catalog};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
