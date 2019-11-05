import * as React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MovieCardThumbnail} from './movie-card-thumbnail.jsx';

configure({adapter: new Adapter()});

it(`handles thumbnail click`, () => {
  const onThumbnailClick = jest.fn();

  const movieCardThumbnail = shallow(<MovieCardThumbnail
    card={{
      id: 0,
      title: ``,
      link: ``,
      imgSrc: ``,
      posterSrc: ``,
      imgDescription: ``,
      genre: ``,
      year: 0
    }}
    onThumbnailClick={onThumbnailClick}
    onThumbnailMouseOver={() => {}}
  />);

  const thumbNailTitle = movieCardThumbnail.find(`.small-movie-card__link`);
  thumbNailTitle.simulate(`click`);
  expect(onThumbnailClick).toHaveBeenCalledTimes(1);
});

it(`handles thumbnail click`, () => {
  const onThumbnailMouseOver = jest.fn();

  const card = {
    id: 0,
    title: ``,
    link: ``,
    imgSrc: ``,
    posterSrc: ``,
    imgDescription: ``,
    genre: ``,
    year: 0
  };

  const movieCardThumbnail = shallow(<MovieCardThumbnail
    card={card}
    onThumbnailClick={()=> {}}
    onThumbnailMouseOver={onThumbnailMouseOver}
  />);

  const movieCardElement = movieCardThumbnail.find(`.small-movie-card`);
  movieCardElement.simulate(`mouseOver`);
  expect(onThumbnailMouseOver).toHaveBeenCalledWith(card);
});
