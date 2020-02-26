import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const films = [
  {
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
  },
  {
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
  },
];

it(`<App /> is rendered correctly`, () => {
  const tree = renderer
    .create(<App
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
