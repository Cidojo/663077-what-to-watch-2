import * as React from 'react';
import {MainPage} from './main-page.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<MainPage
      userData={{
        avatar: ``
      }}
      currentVideoID={0}
      genres={{
        ALL: {
          name: ``,
          link: ``
        }
      }}
      movieCards={[{
        id: 0,
        title: ``,
        link: ``,
        imgSrc: ``,
        posterSrc: ``,
        imgDescription: ``,
        genre: ``,
        year: 0
      }]}
      cardsPerPage={0}
      handleCurrentVideoIDChange={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
