import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenreItem} from './genre-item';

configure({adapter: new Adapter()});

it(`Tab handler should be called with tab text content`, () => {
  const onGenreTabClick = jest.fn();
  const preventDefault = jest.fn();

  const genreItem = mount(<GenreItem
    isActive={false}
    genre={`drama`}
    onGenreTabClick={onGenreTabClick}
  />);

  const tabLink = genreItem.find(`.catalog__genres-link`);
  tabLink.simulate(`click`, {preventDefault});
  expect(onGenreTabClick).toHaveBeenCalledWith(`drama`);
});

it(`Should have active class modifier when isActive is true`, () => {
  const onGenreTabClick = jest.fn();

  const genreItem = mount(<GenreItem
    isActive={true}
    genre={`drama`}
    onGenreTabClick={onGenreTabClick}
  />);

  const tab = genreItem.find(`.catalog__genres-item`);
  expect(tab.hasClass(/active/g)).toEqual(true);
});
