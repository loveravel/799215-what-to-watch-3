import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const movie = {
  id: 1,
  name: `Aviator`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  previewImage: `img/aviator.jpg`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  genre: `Drama / Epic Movie`,
  released: 2014,
  description: `Having received a small factory from his father,
    Howard Hughes turned it into a gigantic, fantastically profitable enterprise.
    Having become the owner of a huge film company, he shot the most expensive
    film of his time and won the hearts of the most beautiful Hollywood actresses.`,
  director: `Martin Scorsese`,
  starring: [
    `Leonardo DiCaprio`,
    `Cate Blanchett`,
    `Kate Beckinsale`,
    `John C. Reilly`,
    `Alec Baldwin`,
    `Alan Alda`,
    `Ian Holm`,
    `Danny Huston`,
    `Gwen Stefani`,
    `Jude Law`,
  ],
  runTime: 170,
  rating: 9.5,
  scoresCount: 15,
  isFavorite: false,
};


it(`<VideoPlayer /> is rendered correctly`, () => {
  const tree = renderer
    .create(<VideoPlayer
      previewVideo={movie.previewVideo}
      previewImage={movie.previewImage}
      isPlaying={true}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
