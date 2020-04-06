import React from "react";
import renderer from "react-test-renderer";

import {movie, reviews} from "../../mocks/test-data.js";

import MovieTabs from "./movie-tabs.jsx";

it(`<MovieTabs/> is rendered correctly`, () => {
  const props = {
    movie,
    reviews,
    activeItemIndex: 0,
    onItemClick: () => {},
  };

  const tree = renderer
    .create(<MovieTabs {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
