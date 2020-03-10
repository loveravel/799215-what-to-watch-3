import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`The card should be mouseEnter`, () => {
  const onCardMouseEnter = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onCardMouseEnter={onCardMouseEnter}
      />
  );

  const movieCardElement = movieCard.find(`.small-movie-card`);

  movieCardElement.simulate(`mouseEnter`);

  expect(onCardMouseEnter.mock.calls.length).toBe(1);
});

it(`The card should be clicked`, () => {
  const onCardClick = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onCardClick={onCardClick}
      />
  );

  const movieCardElement = movieCard.find(`.small-movie-card`);

  movieCardElement.simulate(`click`);

  expect(onCardClick.mock.calls.length).toBe(1);
});
