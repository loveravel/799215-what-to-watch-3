import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import history from "../../history.js";


class MovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this._timerID = null;
  }

  componentWillUnmount() {
    clearTimeout(this._timerID);
  }

  render() {
    const {
      movie: {id, name},
      children,
      onToggleRunMode,
      isPlaying
    } = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          this._timerID = setTimeout(() => onToggleRunMode(true), 1000);
        }}
        onMouseLeave={() => {
          if (isPlaying) {
            onToggleRunMode();
          }
          clearTimeout(this._timerID);
        }}
      >
        <div
          className="small-movie-card__image"
          onClick={() => history.push(`/films/${id}`)}
        >
          {children}
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  isPlaying: PropTypes.bool,
  onToggleRunMode: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MovieCard;


