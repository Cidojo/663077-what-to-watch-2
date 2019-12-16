import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Logo} from './logo.jsx';

it(`should render Logo component without errors`, () => {
  const tree = renderer.create(<BrowserRouter><Logo /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
