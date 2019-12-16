import * as React from 'react';
import {SmallMovieCard} from './small-movie-card.jsx';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

const props = {
  card: {}
};

it(`should render SmallMovieCard component without errors`, () => {
  const tree = renderer.create(<BrowserRouter><SmallMovieCard {...props} /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
