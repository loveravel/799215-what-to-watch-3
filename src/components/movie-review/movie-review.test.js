import React from "react";
import renderer from "react-test-renderer";
import MovieReview from "./movie-review.jsx";

const review = {
  id: 1,
  user: {
    id: 2,
    name: `Alex Muir`,
  },
  rating: 8.9,
  comment: `Not bad`,
  date: `2019-05-08T14:13:56.569Z`,
};

it(`<MovieReview /> is rendered correctly`, () => {
  const tree = renderer
    .create(<MovieReview
      user={review.user}
      rating={review.rating}
      comment={review.comment}
      date={review.date}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
