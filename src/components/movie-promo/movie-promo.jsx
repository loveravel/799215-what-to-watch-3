import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {Operation as DataOperation} from "../../reducer/data/data.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";

import {FavoriteStatus, AppRoute} from "../../constants.js";
import history from "../../history.js";

const MoviePromo = (props) => {
  const {
    movie,
    onFavoriteButtonClick,
    withAddReview,
    authorized,
  } = props;

  const {
    id,
    name,
    posterImage,
    genre,
    released,
    isFavorite,
  } = movie;

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        { !withAddReview &&
          <div className="movie-card__poster">
            <img
              src={posterImage}
              alt={`${name} poster`}
              width="218"
              height="327"
            />
          </div>
        }

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{released}</span>
          </p>

          <div className="movie-card__buttons">
            <Link to={`/player/${id}`}
              className="btn btn--play movie-card__button"
              type="button"
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </Link>
            <button
              className="btn btn--list movie-card__button"
              type="button"
              onClick={() => {
                if (authorized) {
                  onFavoriteButtonClick(id, isFavorite ? FavoriteStatus.NO : FavoriteStatus.YES);
                } else {
                  history.push(AppRoute.LOGIN);
                }
              }}
            >
              {
                isFavorite ?
                  <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list"></use>
                  </svg>
                  :
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
              }
              <span>My list</span>
            </button>
            {
              withAddReview &&
              <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

MoviePromo.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool.isRequired,
  }),
  onFavoriteButtonClick: PropTypes.func,
  withAddReview: PropTypes.bool,
  authorized: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  authorized: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteButtonClick(id, status) {
    dispatch(DataOperation.toggleFavorite(id, status));
  }
});

export {MoviePromo};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePromo);
