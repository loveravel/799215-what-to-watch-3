import React from "react";
import renderer from "react-test-renderer";

import {movie} from "../../mocks/test-data.js";

import MovieDetails from "./movie-details.jsx";

it(`<MovieDetails /> is rendered correctly`, () => {
  const props = {
    movie,
  };

  const tree = renderer
    .create(<MovieDetails {...props}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
