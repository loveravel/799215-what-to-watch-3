import React from "react";
import PropTypes from "prop-types";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";

const Tab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

class MoviePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: Tab.OVERVIEW,
    };
  }

  _handleLinkClick(value) {
    this.setState({
      currentTab: Tab[value.toUpperCase()],
    });
  }

  _getCurrentTab(movie, reviews) {
    switch (this.state.currentTab) {
      case Tab.OVERVIEW:
        return (<MovieOverview
          movie={movie}
        />);
      case Tab.DETAILS:
        return (<MovieDetails
          movie={movie}
        />);
      case Tab.REVIEWS:
        return (<MovieReviews
          reviews={reviews}
        />);
    }
    return null;
  }

  render() {
    const {movie, reviews} = this.props;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.backgroundImage} alt={movie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movie.genre}</span>
                <span className="movie-card__year">{movie.release}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  {
                    Object.values(Tab).map((tab, index) => (
                      <li
                        className={`movie-nav__item${this.state.currentTab === tab ? ` movie-nav__item--active` : ``}`}
                        key={`${tab}-${index}`}
                      >
                        <a
                          href="#"
                          className="movie-nav__link"
                          onClick={(evt) => {
                            evt.preventDefault();
                            this._handleLinkClick(evt.target.text);
                          }}
                        >
                          {tab}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </nav>

              {
                this._getCurrentTab(movie, reviews)
              }

            </div>
          </div>
        </div>
      </section>
    );
  }
}

MoviePage.propTypes = {
  movie: PropTypes.object,
  reviews: PropTypes.array,
};

export default MoviePage;
