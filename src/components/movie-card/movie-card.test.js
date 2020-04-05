import React from "react";
import renderer from "react-test-renderer";
import {Router} from 'react-router-dom';

import history from "../../history.js";
import {movie} from "../../mocks/test-data.js";

import MovieCard from "./movie-card.jsx";

it(`<MovieCard/> is rendered correctly`, () => {
  const props = {
    movie,
    isPlaying: false,
    onToggleRunMode: () => {},
  };

  const tree = renderer
    .create(
        <Router history={history}>
          <MovieCard {...props}>
            <video/>
          </MovieCard>
        </Router>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
