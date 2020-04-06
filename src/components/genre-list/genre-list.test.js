import React from "react";
import renderer from "react-test-renderer";

import GenreList from "./genre-list.jsx";

it(`<GenresList/> is rendered correctly`, () => {
  const props = {
    genres: [`All genres`, `Crime`, `Drama`, `Action`, `Fantasy`, `Adventure`],
    genreFilter: `Crime`,
    onGenreClick: () => {}
  };

  const tree = renderer
    .create(<GenreList {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
