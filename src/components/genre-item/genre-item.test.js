import * as React from 'react';
import {GenreItem} from './genre-item.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<GenreItem
      currentGenre={``}
      genre={``}
      onGenreTabClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
