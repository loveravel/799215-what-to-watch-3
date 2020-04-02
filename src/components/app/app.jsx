import React from "react";
import PropTypes from "prop-types";
import {Router, Route, Switch} from "react-router-dom";
import history from "../../history.js";
import {connect} from "react-redux";

import {getPromoMovie} from "../../reducer/data/selectors.js";

import withAuthForm from "../../hocs/with-auth-form/with-auth-form.js";

import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";

const SignInWrapped = withAuthForm(SignIn);

const App = (props) => {
  const {promoMovie} = props;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Main movie={promoMovie}/>
        </Route>
        <Route exact path="/login">
          <SignInWrapped />
        </Route>
      </Switch>
    </Router>
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
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
});

export {App};

export default connect(mapStateToProps)(App);
