import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MainPage} from './main-page.jsx';

configure({adapter: new Adapter()});

it(`handles thumbnail click`, () => {
  const handleCurrentVideoIDChange = jest.fn();

  const mainPage = mount(<MainPage
    userData={{
      avatar: ``
    }}
    currentVideoID={`000`}
    genres={{
      ALL: {
        name: ``,
        link: ``
      }
    }}
    movieCards={[{
      id: `000`,
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

  const thumbNailTitle = mainPage.find(`.small-movie-card__link`);
  thumbNailTitle.simulate(`click`);
  expect(handleCurrentVideoIDChange).toHaveBeenCalledTimes(1);
});
