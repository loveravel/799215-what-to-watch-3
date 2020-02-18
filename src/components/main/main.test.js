import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const films = [`Aviator`, `Bohemian Rhapsody`, `Macbeth`];

it(`<Main /> is rendered correctly`, () => {
  const tree = renderer
    .create(<Main
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
