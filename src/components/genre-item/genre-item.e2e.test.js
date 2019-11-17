import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenreItem} from "./genre-item";

configure({adapter: new Adapter()});

it(`Tab handler should be called with tab text content`, () => {
  const onGenreTabClick = jest.fn();
  const preventDefault = jest.fn();

  const genreItem = mount(<GenreItem
    currentGenre={`comedy`}
    genre={`drama`}
    onGenreTabClick={onGenreTabClick}
  />);

  const tab = genreItem.find(`.catalog__genres-link`);
  tab.simulate(`click`, {preventDefault});
  expect(onGenreTabClick).toHaveBeenCalledWith(`drama`);
});
