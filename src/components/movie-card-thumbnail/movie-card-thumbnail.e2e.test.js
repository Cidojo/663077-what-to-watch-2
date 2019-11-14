import * as React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MovieCardThumbnail} from './movie-card-thumbnail.jsx';

configure({adapter: new Adapter()});

it(`handles thumbnail click`, () => {
  const onThumbnailClick = jest.fn();

  const card = {
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
    rating: {
      score: ``,
      level: ``,
      count: 0
    },
    src: ``
  };

  const movieCardThumbnail = shallow(<MovieCardThumbnail
    card={card}
    onThumbnailClick={onThumbnailClick}
    onThumbnailMouseEnter={() => {}}
  />);

  const thumbNailTitle = movieCardThumbnail.find(`.small-movie-card__link`);
  thumbNailTitle.simulate(`click`);
  expect(onThumbnailClick).toHaveBeenCalledTimes(1);
});

it(`handles thumbnail mouseEnter`, () => {
  const onThumbnailMouseEnter = jest.fn();

  const card = {
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
    rating: {
      score: ``,
      level: ``,
      count: 0
    }
  };

  const movieCardThumbnail = shallow(<MovieCardThumbnail
    card={card}
    onThumbnailClick={()=> {}}
    onThumbnailMouseEnter={onThumbnailMouseEnter}
  />);

  const movieCardElement = movieCardThumbnail.find(`.small-movie-card`);
  movieCardElement.simulate(`mouseEnter`);
  expect(onThumbnailMouseEnter).toHaveBeenCalledWith(card);
});
