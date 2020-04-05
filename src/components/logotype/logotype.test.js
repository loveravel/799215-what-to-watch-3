import React from "react";
import renderer from "react-test-renderer";
import {Router} from 'react-router-dom';

import history from "../../history.js";

import Logotype from "./logotype.jsx";

it(`<Logotype/> is rendered correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Logotype/>
        </Router>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`<Logotype/> is rendered correctly with a light theme`, () => {
  const props = {
    isLight: true,
  };

  const tree = renderer
  .create(
      <Router history={history}>
        <Logotype {...props}/>
      </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
