import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getFavoritesFilms} from "../../reducer/data/selectors.js";

import PageHeader from "../page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import MovieList from "../movie-list/movie-list.jsx";

const MyList = (props) => {
  const {favoriteFilms} = props;

  return (
    <div className="user-page">

      <PageHeader additionalClass="user-page__head"/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieList
          films={favoriteFilms}
          message={`No favorite films`}
        />
      </section>

      <PageFooter/>
    </div>
  );
};

MyList.propTypes = {
  favoriteFilms: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    favoriteFilms: getFavoritesFilms(state)
  };
};

export {MyList};
export default connect(mapStateToProps)(MyList);
