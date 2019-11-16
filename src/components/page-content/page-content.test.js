import * as React from 'react';
import {PageContent} from './page-content.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<PageContent
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
        year: 0,
        director: ``,
        starring: [],
        rating: 0,
        scoresCount: 0,
        src: ``
      }]}
      onCurrentVideoIDChange={()=> {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
