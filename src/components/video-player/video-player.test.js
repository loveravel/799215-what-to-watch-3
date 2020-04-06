import React from "react";
import renderer from "react-test-renderer";

import VideoPlayer from "./video-player.jsx";

it(`<VideoPlayer/> is rendered correctly`, () => {
  const props = {
    movieName: ``,
    isPlaying: true,
    isFullScreenMode: false,
    filmName: ``,
    isLoading: false,
    progress: 0,
    timeRemain: ``,
    onToggleRunMode: () => {},
    onChangeScreenMode: () => {},
    onClosePlayer: () => {},
  };

  const tree = renderer
    .create(
        <VideoPlayer {...props}>
          <video/>
        </VideoPlayer>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();
  expect(tree).toMatchSnapshot();
});
