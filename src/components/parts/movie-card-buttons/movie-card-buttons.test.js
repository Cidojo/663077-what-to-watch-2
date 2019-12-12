import * as React from 'react';
import {MovieCardButtons} from './movie-card-buttons.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  card: {},
  cardId: 0,
  onPlayButtonClick: () => {},
  onAddToFavoriteClick: () => {},
};

it(`should render MovieCardButtons component without errors`, () => {
  const tree = renderer.create(<MovieCardButtons {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
