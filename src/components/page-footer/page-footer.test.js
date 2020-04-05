import React from "react";
import renderer from "react-test-renderer";
import {Router} from 'react-router-dom';

import history from "../../history.js";

import PageFooter from "./page-footer.jsx";

it(`<PageFooter /> is rendered correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <PageFooter/>
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
