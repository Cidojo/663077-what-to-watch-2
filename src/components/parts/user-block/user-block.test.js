import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {UserBlock} from './user-block.jsx';

const props = {
  userData: {}
};

it(`should render UserBlock component without errors`, () => {
  const tree = renderer.create(<BrowserRouter><UserBlock {...props} /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
