import React from "react";
import renderer from "react-test-renderer";

import {reviews} from "../../mocks/test-data.js";

import MovieReviews from "./movie-reviews.jsx";

it(`<MovieReviews /> is rendered correctly`, () => {
  const props = {
    reviews,
  };

  const tree = renderer
    .create(<MovieReviews {...props}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
