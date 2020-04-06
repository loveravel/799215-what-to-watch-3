import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import configureStore from "redux-mock-store";

import {films} from "../../mocks/test-data.js";
import history from "../../history.js";
import NameSpace from "../../reducer/name-space.js";

import MovieList from "./movie-list.jsx";

const mockStore = configureStore([]);

it(`<MovieList /> component renders correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films
    }
  });

  const props = {
    films,
    message: ``,
  };

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MovieList {...props}/>
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`<MovieList /> component renders correctly without films`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: [],
    }
  });

  const props = {
    films: [],
    message: ``,
  };

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MovieList {...props}/>
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();
  expect(tree).toMatchSnapshot();
});
