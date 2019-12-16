import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {SignIn} from './sign-in.jsx';

it(`should render SignIn component without errors`, () => {
  const tree = renderer.create(<BrowserRouter><SignIn /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
