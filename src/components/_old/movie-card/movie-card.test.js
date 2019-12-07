import * as React from 'react';
import {MovieCard} from './movie-card.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const movieCard = {
    id: 0,
    src: ``,
    imgSrc: ``,
    posterSrc: ``,
    imgDescription: ``,
    link: ``,
    title: ``,
    backgroundColor: ``,
    description: ``,
    isFavorite: false,
    previewSrc: ``,
    genre: ``,
    year: 0,
    director: ``,
    starring: [``],
    rating: 0,
    ratingCount: 0,
    runTime: 0
  };

  const tree = renderer
    .create(<MovieCard
      card={movieCard}
      userAvatar={``}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
