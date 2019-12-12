import * as React from 'react';
import {GenreItem} from './genre-item.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  isActive: false,
  genre: ``,
  onGenreTabClick: () => {}
};

it(`should render GenreItem component without errors`, () => {
  const tree = renderer.create(<GenreItem {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
