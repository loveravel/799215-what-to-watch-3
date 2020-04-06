import React from "react";
import renderer from "react-test-renderer";

import {FilmsCount} from "../../constants.js";
import {films} from "../../mocks/test-data.js";

import {ButtonMore} from "./button-more.jsx";

it(`<ButtonMore /> is rendered correctly with a small number of films`, () => {
  const props = {
    filteredFilms: films,
    filmsCount: FilmsCount.INITIAL_MAIN,
    incrementFilmsCount: () => {}
  };

  const tree = renderer
    .create(<ButtonMore {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`<ButtonMore /> is rendered correctly with a large number of films`, () => {
  const props = {
    filteredFilms: [...films, ...films, ...films],
    filmsCount: FilmsCount.INITIAL_MAIN,
    incrementFilmsCount: () => {}
  };

  const tree = renderer
    .create(<ButtonMore {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
