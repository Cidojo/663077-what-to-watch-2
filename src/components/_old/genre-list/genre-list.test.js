import * as React from 'react';
import {GenreList} from './genre-list.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<GenreList
      genres={{
        all: `All`,
        rest: [`some`]
      }}
      maxGenresToDisplay={0}
      onGenreTabClick={() => {}}
      currentGenre={``}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
