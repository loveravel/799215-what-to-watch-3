import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from "../../history.js";

import SignIn from './sign-in.jsx';

it(`Components SignIn renders correctly`, () => {
  const props = {
    formError: {
      email: ``,
      password: ``,
    },
    isValid: false,
    authorized: false,
    onChange: () => {},
    onSubmit: () => {},
  };

  const tree = renderer
    .create(
        <Router history={history}>
          <SignIn {...props}/>
        </Router>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
