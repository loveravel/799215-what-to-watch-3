import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const films = [`Aviator`, `Bohemian Rhapsody`, `Macbeth`];

it(`<App /> is rendered correctly`, () => {
  const tree = renderer
    .create(<App
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
