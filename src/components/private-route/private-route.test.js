import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import history from "../../history.js";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../constants.js";

import {PrivateRoute} from "./private-route.jsx";

const mockStore = configureStore([]);


it(`<PrivateRoute /> component renders correctly`, () => {
  let store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH
    }
  });

  const props = {
    render: () => {},
    path: `/`,
    exact: true,
    authorizationStatus: AuthorizationStatus.AUTH
  };

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <PrivateRoute {...props}/>
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();
  expect(tree).toMatchSnapshot();
});
