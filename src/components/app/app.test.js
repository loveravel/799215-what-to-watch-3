import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import history from "../../history.js";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../constants.js";
import {films, movie} from "../../mocks/test-data.js";

import {App} from "./app.jsx";

const mockStore = configureStore([]);

it(`<App/> is rendered correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userData: {},
    },
    [NameSpace.DATA]: {
      films,
    },
  });

  const props = {
    promoMovie: movie,
  };

  const tree = renderer
  .create(
      <Provider store={store}>
        <Router history={history}>
          <App {...props}/>
        </Router>
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();
  expect(tree).toMatchSnapshot();
});
