import * as React from 'react';
import {Review} from './review.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {

  const tree = renderer
    .create(<Review
      review={{
        id: 0,
        user: {
          id: 0,
          name: ``,
        },
        rating: 0,
        comment: ``,
        date: ``
        // date: `2019-05-08T14:13:56.569Z`
      }}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
