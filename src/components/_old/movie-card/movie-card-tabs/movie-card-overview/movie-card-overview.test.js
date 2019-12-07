import * as React from 'react';
import {MovieCardOverview} from './movie-card-overview.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {

  const tree = renderer
    .create(<MovieCardOverview
      card={{
        director: ``,
        starring: [``],
        description: ``
      }}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
