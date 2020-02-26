import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

const movie = {
  name: `Aviator`,
  posterImage: `aviator`,
  previewImage: `aviator`,
  previewVideo: `aviator`,
  page: `aviator`,
  genre: `Drama / Epic Movie`,
  release: `February 3, 2005`,
  description: `Having received a small factory from his father,
    Howard Hughes turned it into a gigantic, fantastically profitable enterprise.
    Having become the owner of a huge film company, he shot the most expensive
    film of his time and won the hearts of the most beautiful Hollywood actresses.`,
  score: 9.5,
  numberOfVotes: 15,
  cast: [
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
  duration: 170,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`The card should be mouseEnter`, () => {
  const onMouseCardEnter = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onCardMouseEnter={onMouseCardEnter}
      />
  );

  const movieCardElement = movieCard.find(`.small-movie-card`);

  movieCardElement.simulate(`mouseEnter`);

  expect(onMouseCardEnter.mock.calls.length).toBe(1);
});
