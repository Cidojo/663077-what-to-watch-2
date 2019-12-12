import * as React from 'react';
import {Logo} from './logo.jsx';
import * as renderer from 'react-test-renderer';

it(`should render Logo component without errors`, () => {
  const tree = renderer.create(<Logo />).toJSON();
  expect(tree).toMatchSnapshot();
});
