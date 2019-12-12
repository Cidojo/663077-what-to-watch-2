import * as React from 'react';
import {MovieCardPoster} from './movie-card-poster.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  name: ``,
  posterImage: ``,
  extraClassName: ``
};

it(`should render MovieCardPoster component without errors`, () => {
  const tree = renderer.create(<MovieCardPoster {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
