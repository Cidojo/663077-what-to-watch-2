import * as React from 'react';
import {Video} from './video.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  videoLink: ``,
  posterImage: ``,
  muted: false
};

it(`should render Video component without errors`, () => {
  const tree = renderer.create(<Video {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
