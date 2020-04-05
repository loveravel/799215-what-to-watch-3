import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import configureStore from "redux-mock-store";

import {films, userData} from "../../mocks/test-data.js";
import {AuthorizationStatus} from "../../constants.js";
import history from "../../history.js";
import NameSpace from "../../reducer/name-space.js";

import {MyList} from "./my-list.jsx";

const mockStore = configureStore([]);

it(`<MyList /> component renders correctly`, () => {
  let store = mockStore({
    [NameSpace.DATA]: {
      films
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      userData,
    }
  });

  const props = {
    favoriteFilms: films,
  };

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MyList {...props}/>
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();
  expect(tree).toMatchSnapshot();
});
