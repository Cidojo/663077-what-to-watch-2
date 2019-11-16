import * as React from 'react';
import {MoviePage} from './movie-page.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<MoviePage
      userData={{
        avatar: ``
      }}
      currentCard={{
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
        ratingCount: 0,
        runTime: 0,
        src: ``
      }}
      moviesLikeThis={[{
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
        ratingCount: 0,
        runTime: 0,
        src: ``
      }]}
      onCurrentVideoIDChange={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
