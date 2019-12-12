import * as React from 'react';
import {GenreList} from './genre-list.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  activeGenre: ``,
  genres: [],
  onGenreChange: () => {}
};

it(`should render GenreList component without errors`, () => {
  const tree = renderer.create(<GenreList {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
