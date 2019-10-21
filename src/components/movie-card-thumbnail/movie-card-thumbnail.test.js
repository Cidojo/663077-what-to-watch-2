import * as React from 'react';
import {MovieCardThumbnail} from './movie-card-thumbnail.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<MovieCardThumbnail
      card={{
        id: 0,
        title: ``,
        link: ``,
        imgSrc: ``,
        posterSrc: ``,
        imgDescription: ``,
        genre: ``,
        year: 0
      }}
      onThumbnailClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
