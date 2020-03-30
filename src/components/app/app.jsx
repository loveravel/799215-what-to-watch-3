import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

const App = (props) => {
  const {films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main movie={films[0]} />
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

const mapStateToProps = (state) => {
  const {films} = state;
  return {films};
};

export {App};

export default connect(mapStateToProps)(App);
