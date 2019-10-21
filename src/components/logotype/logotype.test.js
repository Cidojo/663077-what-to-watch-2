import * as React from 'react';
import {Logotype} from './logotype.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<Logotype />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
