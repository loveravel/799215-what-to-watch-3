import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {movie} from "../../mocks/test-data.js";

import MovieCard from "./movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Video player in <MovieCard/> playing after mouseenter`, () => {
  jest.useFakeTimers();

  const props = {
    movie,
    isPlaying: false,
    onToggleRunMode: jest.fn(),
  };

  const movieCard = shallow(
      <MovieCard {...props}>
        <video/>
      </MovieCard>
  );

  const card = movieCard.find(`.small-movie-card`);

  card.simulate(`mouseenter`);
  jest.runAllTimers();

  expect(props.onToggleRunMode).toHaveBeenCalledTimes(1);
});

it(`Video player in <MovieCard/> paused after mouseleave`, () => {
  const props = {
    movie,
    isPlaying: true,
    onToggleRunMode: jest.fn(),
  };

  const movieCard = shallow(
      <MovieCard {...props}>
        <video/>
      </MovieCard>
  );

  const card = movieCard.find(`.small-movie-card`);

  card.simulate(`mouseleave`);

  expect(props.onToggleRunMode).toHaveBeenCalledTimes(1);
});
