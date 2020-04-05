import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect, Link} from "react-router-dom";

import {getMovie} from "../../reducer/data/selectors.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";

import Logotype from "../logotype/logotype.jsx";
import UserBlock from "../user-block/user-block.jsx";


const ratings = new Array(5).fill(``).map((_, i) => i + 1);

const AddReview = (props) => {
  const {
    movie,
    comment,
    rating,
    isDisabled,
    isCommentValid,
    isRatingValid,
    isFormValid,
    onChange,
    onDisable,
    onSendReview,
    onSendFormSuccess,
    formMessage
  } = props;

  if (!movie) {
    return <Redirect to="/"/>;
  }

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img
            src={movie.backgroundImage}
            alt={movie.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logotype />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${movie.id}`} className="breadcrumbs__link">{movie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={movie.posterImage}
            alt={movie.name}
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={(evt) => {
            evt.preventDefault();

            if (!isFormValid) {
              return;
            }

            onDisable(true);

            onSendReview(movie.id, {rating, comment}, onSendFormSuccess);
          }}
        >
          <div className="rating">
            <div className="rating__stars">
              {
                ratings.map((it) => {
                  return (
                    <React.Fragment key={it}>
                      <input
                        className="rating__input"
                        id={`star-${it}`}
                        type="radio"
                        name="rating"
                        value={it}
                        checked={it === rating}
                        onChange={onChange}
                        disabled={isDisabled}
                      />
                      <label
                        className="rating__label"
                        htmlFor={`star-${it}`}
                        style={{opacity: (it <= rating) ? 1 : 0.5}}
                      >
                        Rating {it}
                      </label>
                    </React.Fragment>
                  );
                })
              }
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              value={comment}
              onChange={onChange}
              disabled={isDisabled}
              style={{opacity: isDisabled ? 0.3 : 1}}
            >
            </textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={!isRatingValid || !isCommentValid || isDisabled ? true : false}
                style={{opacity: !isRatingValid || !isCommentValid || isDisabled ? 0.3 : 1}}
              >
                Post
              </button>
            </div>

          </div>
        </form>
        {
          formMessage
          &&
          <p style={{
            fontSize: `30px`,
            textAlign: `center`
          }}>{formMessage}</p>
        }
      </div>

    </section>
  );
};

AddReview.propTypes = {
  movie: PropTypes.object,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isCommentValid: PropTypes.bool.isRequired,
  isRatingValid: PropTypes.bool.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onDisable: PropTypes.func.isRequired,
  onSendReview: PropTypes.func.isRequired,
  onSendFormSuccess: PropTypes.func.isRequired,
  formMessage: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    movie: getMovie(state, ownProps.movieID),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSendReview(id, review, onSendFormSuccess) {
    dispatch(DataOperation.addReview(id, review, onSendFormSuccess));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
