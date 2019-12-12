import * as React from 'react';
import {Button} from './button.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  type: `button`,
  className: ``,
  onClick: () => {}
};

it(`should render Button component without errors`, () => {
  const tree = renderer.create(<Button {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
