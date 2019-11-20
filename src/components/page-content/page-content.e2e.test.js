import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PageContent} from './page-content.jsx';

configure({adapter: new Adapter()});

// it(`should call video id change handler from props`, () => {
//   const onCurrentVideoIDChange = jest.fn();
//
//   const loadStub = jest
//     .spyOn(window.HTMLMediaElement.prototype, `load`)
//     .mockImplementation(() => {});
//   const playStub = jest
//     .spyOn(window.HTMLMediaElement.prototype, `play`)
//     .mockImplementation(() => {});
//   const pauseStub = jest
//     .spyOn(window.HTMLMediaElement.prototype, `pause`)
//     .mockImplementation(() => {});
//
//   const movieCards = [{
//     id: 0,
//     src: ``,
//     imgSrc: ``,
//     posterSrc: ``,
//     imgDescription: ``,
//     link: ``,
//     title: ``,
//     backgroundColor: ``,
//     description: ``,
//     isFavorite: false,
//     previewSrc: ``,
//     genre: ``,
//     year: 0,
//     director: ``,
//     starring: [``],
//     rating: 0,
//     ratingCount: 0,
//     runTime: 0
//   }];
//
//   const pageContent = mount(<PageContent
//     genres={{
//       all: ``,
//       rest: [``]
//     }}
//     genre={``}
//     movieCards={movieCards}
//     maxGenresToDisplay={9}
//     maxCatalogCards={1}
//     onGenreTabClick={() => {}}
//     onCurrentVideoIDChange={onCurrentVideoIDChange}
//   />);
//
//   const thumbNailTitle = pageContent.find(`.small-movie-card__link`);
//   thumbNailTitle.simulate(`click`);
//   expect(onCurrentVideoIDChange).toHaveBeenCalledTimes(1);
//   loadStub.mockRestore();
//   playStub.mockRestore();
//   pauseStub.mockRestore();
// });

it(`should call video id change handler from props`, () => {
  const onGenreTabClick = jest.fn();

  const loadStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `load`)
    .mockImplementation(() => {});
  const playStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `play`)
    .mockImplementation(() => {});
  const pauseStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `pause`)
    .mockImplementation(() => {});

  const movieCards = [{
    id: 0,
    src: ``,
    imgSrc: ``,
    posterSrc: ``,
    imgDescription: ``,
    link: ``,
    title: ``,
    backgroundColor: ``,
    description: ``,
    isFavorite: false,
    previewSrc: ``,
    genre: ``,
    year: 0,
    director: ``,
    starring: [``],
    rating: 0,
    ratingCount: 0,
    runTime: 0
  }];

  const pageContent = mount(<PageContent
    genres={{
      all: ``,
      rest: [``]
    }}
    genre={``}
    movieCards={movieCards}
    maxGenresToDisplay={9}
    maxCatalogCards={0}
    onGenreTabClick={onGenreTabClick}
    onCurrentVideoIDChange={() => {}}
  />);

  const genreTab = pageContent.find(`.catalog__genres-link`).first();
  genreTab.simulate(`click`);
  expect(onGenreTabClick).toHaveBeenCalledTimes(1);
  loadStub.mockRestore();
  playStub.mockRestore();
  pauseStub.mockRestore();
});
