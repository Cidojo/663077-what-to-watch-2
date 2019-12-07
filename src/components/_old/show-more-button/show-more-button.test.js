import * as React from 'react';
import {ShowMoreButton} from './show-more-button.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<ShowMoreButton
      onButtonClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
