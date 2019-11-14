import * as React from 'react';
import {ThumbnailPlayer} from './thumbnail-player.jsx';
import * as renderer from 'react-test-renderer';

it(`should render ThumbNail component without errors`, () => {
  const tree = renderer
    .create(<ThumbnailPlayer
      src={``}
      posterSrc={``}
      subscribeMouseEnter={() => {}}
      subscribeMouseLeave={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
