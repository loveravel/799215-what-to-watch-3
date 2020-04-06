import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Operation as DataOperation} from "../../reducer/data/data.js";
import {getFilms, getMovie, getSimilarFilms, getReviews} from "../../reducer/data/selectors.js";

import withActiveItem from "../../hocs/with-active-item/with-active-item.js";

import MovieList from "../movie-list/movie-list.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import PageHeader from "../page-header/page-header.jsx";
import MoviePromo from "../movie-promo/movie-promo.jsx";
import MovieTabs from "../movie-tabs/movie-tabs.jsx";


const WrappedMovieTabs = withActiveItem(MovieTabs);


class MoviePage extends React.PureComponent {

  componentDidMount() {
    return this.props.onLoadReviews(this.props.movieID);
  }

  render() {
    const {similarFilms, movie, reviews} = this.props;

    if (!movie) {
      return null;
    }

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
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
              withAddReview={true}
            />
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img
                  src={movie.posterImage}
                  alt={movie.name}
                  width="218"
                  height="327"
                />
              </div>

              <div className="movie-card__desc">
                <WrappedMovieTabs
                  movie={movie}
                  reviews={reviews}
                />
              </div>

            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MovieList
              films={similarFilms}
              message={`No similar films`}
            />
          </section>

          <PageFooter/>
        </div>
      </React.Fragment>
    );
  }
}

MoviePage.propTypes = {
  similarFilms: PropTypes.array,
  movie: PropTypes.object,
  reviews: PropTypes.array,
  onLoadReviews: PropTypes.func,
  movieID: PropTypes.number.isRequired,
};

const mapStateToProps = (state, {movieID}) => {
  return {
    films: getFilms(state),
    movie: getMovie(state, movieID),
    similarFilms: getSimilarFilms(state, movieID),
    reviews: getReviews(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadReviews(id) {
    dispatch(DataOperation.loadReviews(id));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
