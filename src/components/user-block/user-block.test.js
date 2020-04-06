import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";

import {userData} from "../../mocks/test-data.js";
import {AuthorizationStatus} from "../../constants.js";
import history from "../../history.js";

import {UserBlock} from "./user-block.jsx";

it(`<UserBlock/> is rendered correctly with authorization`, () => {
  const props = {
    userData,
    authorized: AuthorizationStatus.AUTH,
  };

  const tree = renderer
    .create(
        <Router history={history}>
          <UserBlock {...props}/>
        </Router>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`<UserBlock/> is rendered correctly without authorization`, () => {
  const props = {
    userData,
    authorized: AuthorizationStatus.NO_AUTH,
  };

  const tree = renderer
  .create(
      <Router history={history}>
        <UserBlock {...props}/>
      </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
