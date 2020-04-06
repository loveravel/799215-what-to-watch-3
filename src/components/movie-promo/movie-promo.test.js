import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";

import {movie} from "../../mocks/test-data.js";
import history from "../../history.js";

import {MoviePromo} from "./movie-promo.jsx";

it(`<MoviePromo/> is rendered correctly`, () => {
  const props = {
    movie,
  };

  const tree = renderer
    .create(
        <Router history={history}>
          <MoviePromo {...props}/>
        </Router>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`<MoviePromo/> is rendered correctly with add review button`, () => {
  const props = {
    movie,
    withAddReview: true,
  };

  const tree = renderer
  .create(
      <Router history={history}>
        <MoviePromo {...props}/>
      </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
