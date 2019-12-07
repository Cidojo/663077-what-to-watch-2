import * as React from 'react';
import {Header} from './header.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<Header
      avatar={``}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
