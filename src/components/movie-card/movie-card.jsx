import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class MovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
  }

  _handleCardMouseEnter() {
    this.setState({
      enterTimeOut: setTimeout(() => this.setState({
        isPlaying: true,
      }), 1000),
    });
  }

  _handleCardMouseLeave() {
    this.setState({
      leaveTimeOut: setTimeout(() => this.setState({
        isPlaying: false,
      }), 1000),
    });
  }

  render() {
    const {name, previewImage, previewVideo, onCardClick} = this.props;
    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleCardMouseEnter}
        onMouseLeave={this._handleCardMouseLeave}
        onClick={onCardClick}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            isPlaying={this.state.isPlaying}
            previewImage={previewImage}
            previewVideo={previewVideo}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="#">
            {name}
          </a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  name: PropTypes.string,
  previewImage: PropTypes.string,
  previewVideo: PropTypes.string,
  onCardClick: PropTypes.func,
};

export default MovieCard;


