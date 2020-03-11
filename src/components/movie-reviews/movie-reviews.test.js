import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews.jsx";

const reviews = [
  {
    id: 1,
    user: {
      id: 2,
      name: `Alex Muir`,
    },
    rating: 8.9,
    comment: `Not bad`,
    date: `2019-05-08T14:13:56.569Z`,
  },
  {
    id: 2,
    user: {
      id: 4,
      name: `Kate Muir`,
    },
    rating: 10,
    comment: `Wonderful! Wonderful! Wonderful! Wonderful! Wonderful!`,
    date: `2019-05-08T14:13:56.569Z`,
  },
];

it(`<MovieReviews /> is rendered correctly`, () => {
  const tree = renderer
    .create(<MovieReviews
      reviews={reviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
