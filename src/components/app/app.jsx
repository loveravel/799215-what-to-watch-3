import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import {getFilms, getPromoMovie} from "../../reducer/data/selectors.js";

import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

const App = (props) => {
  const {films, promoMovie, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main movie={promoMovie}/>
        </Route>
        <Route exact path="/films">
          <MoviePage films={films} movie={films[0]} reviews={reviews} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    posterImage: PropTypes.string,
    page: PropTypes.string
  })),
  promoMovie: PropTypes.object,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    rating: PropTypes.number,
    comment: PropTypes.string,
    date: PropTypes.string,
  })),
  onGenreClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  promoMovie: getPromoMovie(state),
});

export {App};

export default connect(mapStateToProps)(App);
