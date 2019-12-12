import * as React from 'react';
import {SvgIcon} from './svg-icon.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  name: ``,
  viewBox: `0 0 0 0`,
  width: 0,
  height: 0
};

it(`should render SvgIcon component without errors`, () => {
  const tree = renderer.create(<SvgIcon {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
