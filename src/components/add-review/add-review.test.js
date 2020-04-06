import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import history from "../../history.js";
import {movie, userData} from "../../mocks/test-data.js";
import {AuthorizationStatus} from "../../constants.js";
import NameSpace from "../../reducer/name-space.js";

import {AddReview} from "./add-review.jsx";

const mockStore = configureStore([]);

it(`<AddReview/> component renders correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      userData,
    }
  });

  const props = {
    movie,
    comment: ``,
    rating: 3,
    isDisabled: true,
    isCommentValid: false,
    isRatingValid: true,
    isFormValid: false,
    formMessage: ``,
    onChange: () => {},
    onDisable: () => {},
    onSendReview: () => {},
    onSendFormSuccess: () => {},
  };

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <AddReview {...props}/>
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
