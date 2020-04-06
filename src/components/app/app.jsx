import React from "react";
import PropTypes from "prop-types";
import {Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import {getPromoMovie} from "../../reducer/data/selectors.js";

import withAuthForm from "../../hocs/with-auth-form/with-auth-form.js";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player.js";
import withFormReview from "../../hocs/with-form-review/with-form-review.js";

import {AppRoute} from "../../constants.js";
import history from "../../history.js";

import PrivateRoute from "../private-route/private-route.jsx";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import MyList from "../my-list/my-list.jsx";
import VideoPlayer from "../video-player/video-player.jsx";
import AddReview from "../add-review/add-review.jsx";


const SignInWrapped = withAuthForm(SignIn);
const WrappedVideoPlayer = withVideoPlayer(VideoPlayer);
const WrappedAddReview = withFormReview(AddReview);


const App = (props) => {
  const {promoMovie} = props;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main movie={promoMovie}/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignInWrapped/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => {
            return (
              <MyList/>
            );
          }}
        />
        <Route
          exact
          path={AppRoute.MOVIE}
          render={(prop) => {
            return (
              <MoviePage
                {...prop}
              />
            );
          }}
        />
        <Route
          path={AppRoute.VIDEO_PLAYER}
          exact
          render={(prop) => {
            return (
              <WrappedVideoPlayer
                isPlaying={true}
                isMuted={false}
                movieID={prop.match.params.id}
                isPreviewMode={false}
              />
            );
          }}
        />
        <PrivateRoute
          exact
          path={AppRoute.ADD_REVIEW}
          render={(prop) => {
            return (
              <WrappedAddReview
                movieID={prop.match.params.id}
              />
            );
          }}
        />
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
