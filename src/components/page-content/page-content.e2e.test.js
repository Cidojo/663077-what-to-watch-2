import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PageContent} from './page-content.jsx';

configure({adapter: new Adapter()});

it(`handles thumbnail click`, () => {
  const handleCurrentVideoIDChange = jest.fn();

  const pageContent = mount(<PageContent
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
    cardsPerPage={1}
    handleCurrentVideoIDChange={handleCurrentVideoIDChange}
  />);

  const thumbNailTitle = pageContent.find(`.small-movie-card__link`);
  thumbNailTitle.simulate(`click`);
  expect(handleCurrentVideoIDChange).toHaveBeenCalledTimes(1);
});
