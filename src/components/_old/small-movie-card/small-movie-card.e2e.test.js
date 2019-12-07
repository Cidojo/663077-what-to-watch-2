import * as React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SmallMovieCard} from './small-movie-card.jsx';

configure({adapter: new Adapter()});

it(`should run onThumbnailClick handler from props on thumbnail click`, () => {
  const onMovieCardClick = jest.fn();
  const card = {
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
  };

  const smallMovieCard = shallow(<SmallMovieCard
    card={card}
    onMovieCardClick={onMovieCardClick}
    onMovieCardMouseEnter={() => {}}
    onMovieCardMouseLeave={() => {}}
  />);

  const thumbNailTitle = smallMovieCard.find(`.small-movie-card__link`);
  thumbNailTitle.simulate(`click`);
  expect(onMovieCardClick).toHaveBeenCalledWith(0);
});

it(`should run onThumbnailMouseEnter handler from props on thumbnail click`, () => {
  const onMovieCardMouseEnter = jest.fn();

  const card = {
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
  };

  const smallMovieCard = shallow(<SmallMovieCard
    card={card}
    onMovieCardClick={()=> {}}
    onMovieCardMouseEnter={onMovieCardMouseEnter}
    onMovieCardMouseLeave={() => {}}
  />);

  const movieCardElement = smallMovieCard.find(`.small-movie-card`);
  movieCardElement.simulate(`mouseEnter`);
  expect(onMovieCardMouseEnter).toHaveBeenCalledWith(0);
});

it(`should run onThumbnailMouseLeave handler from props on thumbnail click`, () => {
  const onMovieCardMouseLeave = jest.fn();

  const card = {
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
  };

  const smallMovieCard = shallow(<SmallMovieCard
    card={card}
    onMovieCardClick={()=> {}}
    onMovieCardMouseEnter={() => {}}
    onMovieCardMouseLeave={onMovieCardMouseLeave}
  />);

  const movieCardElement = smallMovieCard.find(`.small-movie-card`);
  movieCardElement.simulate(`mouseLeave`);
  expect(onMovieCardMouseLeave).toHaveBeenCalledTimes(1);
});
