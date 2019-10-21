import * as React from 'react';
import {GenreList} from './genre-list.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<GenreList
      genresDictionary={{
        ALL: {
          name: ``,
          link: ``
        }
      }}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
