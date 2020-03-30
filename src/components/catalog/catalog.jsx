import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import GenreList from "../genre-list/genre-list.jsx";
import MovieList from "../movie-list/movie-list.jsx";
import ButtonMore from "../button-more/button-more.jsx";


const getGenres = (films) => {
  const genres = new Set();

  genres.add(`All genres`);

  films.forEach((movie) => {
    genres.add(movie.genre);
  });

  return Array.from(genres).slice(0, 10);
};

const Catalog = (props) => {
  const {films, genreFilter, standard} = props;
  const {onGenreClick} = props;

  const genres = getGenres(films);

  const getCatalogHeader = () => {
    if (!standard) {
      return <h2 className="catalog__title">More like this</h2>;
    } else {
      return (
        <React.Fragment>
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList
            genres={genres}
            genreFilter={genreFilter}
            onGenreClick={onGenreClick}
          />
        </React.Fragment>
      );
    }
  };

  return (
    <section className={`catalog${!standard ? ` catalog--like-this` : ``}`}>

      {
        getCatalogHeader(standard)
      }

      <MovieList
        films={films}
        genreFilter={genreFilter}
        showedFilms={8}
      />

      <ButtonMore
        onButtonClick={() => {}}
      />

    </section>
  );
};

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    posterImage: PropTypes.string,
    genre: PropTypes.string,
  })),
  standard: PropTypes.bool,
  genreFilter: PropTypes.string,
  onGenreClick: PropTypes.func,
};

const mapStateToProps = (state) => {
  const {films, genreFilter} = state;
  return {films, genreFilter};
};

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
