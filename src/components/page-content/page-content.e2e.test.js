import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PageContent} from './page-content.jsx';

configure({adapter: new Adapter()});

it(`should call video id change handler from props`, () => {
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

  const thumbNailTitle = pageContent.find(`.small-movie-card__link`);
  thumbNailTitle.simulate(`click`);
  expect(onCurrentVideoIDChange).toHaveBeenCalledTimes(1);
  loadStub.mockRestore();
  playStub.mockRestore();
  pauseStub.mockRestore();
});
