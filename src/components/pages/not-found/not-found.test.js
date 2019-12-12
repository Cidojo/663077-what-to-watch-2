import * as React from 'react';
import {NotFound} from './not-found.jsx';
import * as renderer from 'react-test-renderer';

it(`should render NotFound component without errors`, () => {
  const tree = renderer.create(<NotFound/>).toJSON();
  expect(tree).toMatchSnapshot();
});
