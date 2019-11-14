import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ThumbnailPlayer} from './thumbnail-player.jsx';

configure({adapter: new Adapter()});

it(`should play video when isPlaying prop is true`, () => {
  const onVideoPlay = jest.fn();

  const playStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `play`)
    .mockImplementation(onVideoPlay);

  mount(<ThumbnailPlayer
    src={``}
    posterSrc={``}
    isPlaying={true}
  />);

  expect(onVideoPlay).toHaveBeenCalledTimes(1);
  playStub.mockRestore();
});

it(`should reset video when isPlaying prop is false`, () => {
  const onVideoPause = jest.fn();

  const pauseStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `pause`)
    .mockImplementation(onVideoPause);

  mount(<ThumbnailPlayer
    src={``}
    posterSrc={``}
    isPlaying={false}
  />);

  expect(onVideoPause).toHaveBeenCalledTimes(1);
  pauseStub.mockRestore();
});
