import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import history from "../../history.js";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../constants.js";
import {userData} from "../../mocks/test-data.js";

import PageHeader from "./page-header.jsx";

const mockStore = configureStore([]);

it(`<PageHeader/> is rendered correctly without authorization`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userData: {},
    }
  });

  const props = {
    additionalClass: ``,
  };

  const tree = renderer
  .create(
      <Provider store={store}>
        <Router history={history}>
          <PageHeader {...props}/>
        </Router>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`<PageHeader/> is rendered correctly with authorization`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      userData
    }
  });

  const props = {
    additionalClass: ``,
  };

  const tree = renderer
  .create(
      <Provider store={store}>
        <Router history={history}>
          <PageHeader {...props}/>
        </Router>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
