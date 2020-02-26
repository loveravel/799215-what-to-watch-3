import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`The title should be clicked`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        films={[`Aviator`, `Bohemian Rhapsody`, `Macbeth`]}
        onTitleClick={onTitleClick}
      />
  );

  const mainTitle = main.find(`h2.movie-card__title`);

  mainTitle.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
});
