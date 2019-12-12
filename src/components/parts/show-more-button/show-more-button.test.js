import * as React from 'react';
import {ShowMoreButton} from './show-more-button.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  onButtonClick: () => {}
};

it(`should render ShowMoreButton component without errors`, () => {
  const tree = renderer.create(<ShowMoreButton {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
