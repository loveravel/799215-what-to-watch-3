import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getMovie} from "../../reducer/data/selectors.js";

import {makeTimer} from "../../utils.js";
import history from "../../history.js";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        progress: 0,
        isLoading: true,
        isPlaying: false,
        isFullScreenMode: false,
        timeRemain: ``
      };

      this._videoRef = React.createRef();
      this._handleRunModeToggle = this._handleRunModeToggle.bind(this);
      this._handleFullScreenMode = this._handleFullScreenMode.bind(this);
      this._handleClosePlayer = this._handleClosePlayer.bind(this);
    }

    componentDidMount() {
      const {
        isPlaying,
        isPreviewMode,
        movie
      } = this.props;

      const video = this._videoRef.current;

      if (!movie) {
        history.push(`/`);
        return null;
      }

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });

      this.setState({isPlaying});

      if (!isPreviewMode) {
        video.ontimeupdate = () => {
          this.setState({
            progress: video.currentTime / video.duration * 100,
            timeRemain: makeTimer(video.duration - video.currentTime)
          });
        };
      }

      return true;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isPreviewMode} = this.props;
      const {isPlaying} = this.state;

      if (video.ended) {

        if (isPreviewMode) {
          video.load();
          return;
        }

        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            this.setState({isPlaying: false});
          })
          .catch((err) => {
            throw new Error(err);
          });
        }
      }

      if (isPlaying) {
        video.play();
      } else {
        if (isPreviewMode) {
          video.load();
        } else {
          video.pause();
        }
      }
    }

    componentWillUnmount() {
      let video = this._videoRef.current;

      if (video) {
        video.ontimeupdate = null;
        video.oncanplaythrough = null;
        video = null;
      }
    }

    _handleClosePlayer() {
      const {id} = this.props.movie;
      this._handleRunModeToggle();
      history.push(`/films/${id}`);
    }

    _handleRunModeToggle() {
      const {isPlaying} = this.state;
      this.setState({isPlaying: !isPlaying});
    }

    _handleFullScreenMode() {
      const {isFullScreenMode} = this.state;
      this.setState({
        isFullScreenMode: !isFullScreenMode
      });
    }

    render() {
      const {
        isPlaying,
        progress,
        isFullScreenMode,
        timeRemain,
        isLoading
      } = this.state;

      if (!this.props.movie) {
        return null;
      }

      const {
        isPreviewMode,
        movie: {
          name,
          video,
          previewVideo,
          previewImage
        },
        isMuted,
      } = this.props;

      return (
        <Component
          {...this.props}
          movieName={name}
          isPlaying={isPlaying}
          isLoading={isLoading}
          progress={progress}
          timeRemain={timeRemain}
          isFullScreenMode={isFullScreenMode}
          onChangeScreenMode={this._handleFullScreenMode}
          onToggleRunMode={this._handleRunModeToggle}
          onClosePlayer={this._handleClosePlayer}
        >
          {
            isPreviewMode ?
              <video
                style={{objectFit: `cover`}}
                width="280"
                height="175"
                poster={previewImage}
                muted={isMuted}
                src={previewVideo}
                ref={this._videoRef}
              />
              :
              <video
                className="player__video"
                muted={isMuted}
                src={video}
                ref={this._videoRef}
              />
          }
        </Component>
      );
    }
  }

  WithVideoPlayer.propTypes = {
    movie: PropTypes.object,
    isPlaying: PropTypes.bool.isRequired,
    isMuted: PropTypes.bool.isRequired,
    isPreviewMode: PropTypes.bool.isRequired,
  };

  const mapStateToProps = (state, ownProps) => {
    return {
      movie: getMovie(state, ownProps.movieID)
    };
  };

  return connect(mapStateToProps)(WithVideoPlayer);
};

export {withVideoPlayer};
export default withVideoPlayer;


