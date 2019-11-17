import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenreList} from "./genre-list";

configure({adapter: new Adapter()});

it(`should call genre handler on genre tab click`, () => {
  const onGenreTabClick = jest.fn();
  const preventDefault = jest.fn();

  const genreList = mount(<GenreList
    currentGenre={``}
    genres={[``]}
    maxGenresToDisplay={1}
    onGenreTabClick={onGenreTabClick}
  />);

  const tab = genreList.find(`.catalog__genres-link`);
  tab.simulate(`click`, {preventDefault});
  expect(onGenreTabClick).toHaveBeenCalledTimes(1);
});
