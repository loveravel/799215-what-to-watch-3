import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const movie = {
  id: 1,
  name: `Aviator`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  previewImage: `img/aviator.jpg`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  previewVideo: `https://`,
  video: `https://`,
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

it(`<MovieCard /> is rendered correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      movie={movie}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
