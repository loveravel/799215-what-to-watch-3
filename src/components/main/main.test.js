import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import history from "../../history.js";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus, FilmsCount, DEFAULT_GENRE} from "../../constants.js";
import {films, movie} from "../../mocks/test-data.js";

import Main from "./main.jsx";

const mockStore = configureStore([]);

it(`<Main/> is rendered correctly`, () => {
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
    films,
    filmsCount: FilmsCount.INITIAL_MAIN,
    movie,
    currentGenre: DEFAULT_GENRE,
    genres: [DEFAULT_GENRE, ``, ``, ``],
  };

  const tree = renderer
  .create(
      <Provider store={store}>
        <Router history={history}>
          <Main {...props}/>
        </Router>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
