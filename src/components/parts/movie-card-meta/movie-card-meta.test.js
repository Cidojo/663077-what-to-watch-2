import * as React from 'react';
import {MovieCardMeta} from './movie-card-meta.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  name: ``,
  genre: ``,
  released: 0
};

it(`should render MovieCardMeta component without errors`, () => {
  const tree = renderer.create(<MovieCardMeta {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
