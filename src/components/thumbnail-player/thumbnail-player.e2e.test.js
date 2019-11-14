import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ThumbnailPlayer} from './thumbnail-player.jsx';

configure({adapter: new Adapter()});

it(`handles thumbnail states`, () => {

  const loadStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `load`)
    .mockImplementation(() => {});

  const mouseEnterCallBacks = [];
  const mouseLeaveCallBacks = [];

  const thumbnailPlayer = mount(<ThumbnailPlayer
    src={``}
    posterSrc={``}
    subscribeMouseEnter={(cb) => {
      mouseEnterCallBacks.push(cb);
    }}
    subscribeMouseLeave={(cb) => {
      mouseLeaveCallBacks.push(cb);
    }}
  />);

  mouseEnterCallBacks.forEach((cb) => cb());

  setTimeout(() => {
    expect(thumbnailPlayer.state().isPlaying).toEqual(true);
  }, 1000);
  loadStub.mockRestore();
});
