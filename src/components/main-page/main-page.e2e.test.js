import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MainPage} from './main-page.jsx';

configure({adapter: new Adapter()});

it(`handles thumbnail click`, () => {
  const onCurrentVideoIDChange = jest.fn();

  const loadStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `load`)
    .mockImplementation(() => {});

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
      year: 0,
      director: ``,
      starring: [],
      rating: {
        score: ``,
        level: ``,
        count: 0
      }
    }]}
    onCurrentVideoIDChange={onCurrentVideoIDChange}
  />);

  const thumbNailTitle = mainPage.find(`.small-movie-card__link`);
  thumbNailTitle.simulate(`click`);
  expect(onCurrentVideoIDChange).toHaveBeenCalledTimes(1);
  loadStub.mockRestore();
});
