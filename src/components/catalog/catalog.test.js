import * as React from 'react';
import {Catalog} from './catalog.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<Catalog
      movieCards={[{
        id: 0,
        title: ``,
        link: ``,
        imgSrc: ``,
        posterSrc: ``,
        imgDescription: ``,
        genre: ``,
        year: 0,
        director: ``,
        starring: [],
        rating: {
          score: ``,
          level: ``,
          count: 0
        }
      }]}
      onCurrentVideoIDChange={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});