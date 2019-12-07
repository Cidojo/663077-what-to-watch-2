import * as React from 'react';
import {MovieCardDetails} from './movie-card-details.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {

  const tree = renderer
    .create(<MovieCardDetails
      card={{
        director: ``,
        starring: [``],
        runTime: 0,
        year: 0,
        genre: ``
      }}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
