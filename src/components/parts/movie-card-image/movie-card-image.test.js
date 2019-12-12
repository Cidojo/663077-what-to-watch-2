import * as React from 'react';
import {MovieCardImage} from './movie-card-image.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  card: {},
  autoplay: false,
  onAutoplayStatusUpdate: () => {}
};

it(`should render MovieCardImage component without errors`, () => {
  const tree = renderer.create(<MovieCardImage {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
