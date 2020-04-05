import React from "react";
import renderer from "react-test-renderer";

import {movie} from "../../mocks/test-data.js";

import MovieOverview from "./movie-overview.jsx";

it(`<MovieOverview /> is rendered correctly`, () => {
  const props = {
    movie,
  };

  const tree = renderer
    .create(<MovieOverview {...props}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
