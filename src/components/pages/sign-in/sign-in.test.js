import * as React from 'react';
import {SignIn} from './sign-in.jsx';
import * as renderer from 'react-test-renderer';

it(`should render SignIn component without errors`, () => {
  const tree = renderer.create(<SignIn />).toJSON();
  expect(tree).toMatchSnapshot();
});
