import * as React from 'react';
import {Sprite} from './sprite.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<Sprite />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
