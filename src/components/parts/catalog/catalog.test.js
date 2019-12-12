import * as React from 'react';
import {Catalog} from './catalog.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  active: null,
  movieCards: [],
  withShowMoreButton: false,
  onShowMore: () => {}
};

it(`should render Catalog component without errors`, () => {
  const tree = renderer.create(<Catalog {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
