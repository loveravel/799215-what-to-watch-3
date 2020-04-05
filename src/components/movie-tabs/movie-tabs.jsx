import React from "react";
import PropTypes from "prop-types";

import {Tab} from "../../constants.js";

import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";


const MovieTabs = (props) => {
  const {
    movie,
    reviews,
    activeItemIndex,
    onItemClick,
  } = props;

  const tabItems = [
    {
      name: Tab.OVERVIEW,
      component: <MovieOverview movie={movie}/>
    },
    {
      name: Tab.DETAILS,
      component: <MovieDetails movie={movie}/>
    },
    {
      name: Tab.REVIEWS,
      component: <MovieReviews reviews={reviews}/>
    }
  ];
  const activeTab = tabItems[activeItemIndex].component;

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            tabItems.map((tab, index) => (
              <li
                className={`movie-nav__item${activeItemIndex === index ? ` movie-nav__item--active` : ``}`}
                key={`${tab}-${index}`}
              >
                <a
                  href="#"
                  className="movie-nav__link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    onItemClick(index);
                  }}
                >
                  {tab.name}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
      {activeTab}
    </React.Fragment>
  );
};

MovieTabs.propTypes = {
  movie: PropTypes.object,
  reviews: PropTypes.array,
  activeItemIndex: PropTypes.number,
  onItemClick: PropTypes.func,
};

export default MovieTabs;
