import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {FilmsCount} from "../../constants.js";
import {films} from "../../mocks/test-data.js";

import {ButtonMore} from "./button-more.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Count Films has been changed`, () => {
  const props = {
    filteredFilms: [...films, ...films, ...films],
    filmsCount: FilmsCount.INITIAL_MAIN,
    incrementFilmsCount: jest.fn()
  };

  const buttonMore = shallow(
      <ButtonMore {...props}/>
  );

  const btn = buttonMore.find(`.catalog__button`);

  btn.simulate(`click`);

  expect(props.incrementFilmsCount).toHaveBeenCalledTimes(1);
});
