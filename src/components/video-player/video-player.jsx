import React from "react";
import PropTypes from 'prop-types';

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      process: null,
      isLoading: true,
      isPlaying: props.isPlaying,
      isMute: true,
    };
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    video.onplay = () => this.setState({
      isPlaying: true,
    });

    video.onpause = () => this.setState({
      isPlaying: false,
    });

    video.ontimeupdate = () => this.setState({
      progress: video.currentTime,
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.previewVideo = ``;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    const {previewVideo, previewImage} = this.props;
    const video = <video
      width ={280} height ={175}
      muted={this.state.isMute}
      poster={previewImage}
      ref={this._videoRef}
    >
      <source src={previewVideo} type="video/mp4" />
    </video>;

    return video;
  }
}

VideoPlayer.propTypes = {
  previewVideo: PropTypes.string,
  previewImage: PropTypes.string,
  isPlaying: PropTypes.bool,
};

export default VideoPlayer;
