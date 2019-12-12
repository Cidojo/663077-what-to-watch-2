import * as React from 'react';
import {TabDetails} from './tab-details.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  director: ``,
  starring: [],
  runTime: 0,
  released: 0,
  genre: ``
};

it(`should render TabDetails component without errors`, () => {
  const tree = renderer.create(<TabDetails {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
