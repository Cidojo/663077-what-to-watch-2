import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Catalog} from './catalog.jsx';

configure({adapter: new Adapter()});

it(`should call thumbnail title click handler on click`, () => {
  const onActiveChange = jest.fn();

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

  const catalog = mount(<Catalog
    movieCards={movieCards}
    maxCatalogCards={1}
    onActiveChange={onActiveChange}
  />);

  const thumbNailTitle = catalog.find(`.small-movie-card__link`);
  thumbNailTitle.simulate(`click`);
  expect(onActiveChange).toHaveBeenCalledWith(0);
  loadStub.mockRestore();
  playStub.mockRestore();
  pauseStub.mockRestore();
});
