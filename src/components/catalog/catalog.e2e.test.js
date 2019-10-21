import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Catalog} from './catalog.jsx';

configure({adapter: new Adapter()});

it(`handles thumbnail click`, () => {
  const handleCurrentVideoIDChange = jest.fn();

  const catalog = mount(<Catalog
    movieCards={[{
      id: `string`,
      title: ``,
      link: ``,
      imgSrc: ``,
      posterSrc: ``,
      imgDescription: ``,
      genre: ``,
      year: 0
    }]}
    cardsPerPage={1}
    handleCurrentVideoIDChange={handleCurrentVideoIDChange}
  />);

  const thumbNailTitle = catalog.find(`.small-movie-card__link`);
  thumbNailTitle.simulate(`click`);
  expect(handleCurrentVideoIDChange).toHaveBeenCalledTimes(1);
});
