import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MoviePage} from './movie-page.jsx';

configure({adapter: new Adapter()});

it(`handles thumbnail click`, () => {
  const onCurrentVideoIDChange = jest.fn();

  const loadStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `load`)
    .mockImplementation(() => {});
  const playStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `play`)
    .mockImplementation(() => {});
  const pauseStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `pause`)
    .mockImplementation(() => {});

  const mainPage = mount(<MoviePage
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
      rating: {
        score: ``,
        level: ``,
        count: 0
      }
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
  playStub.mockRestore();
  pauseStub.mockRestore();
});
