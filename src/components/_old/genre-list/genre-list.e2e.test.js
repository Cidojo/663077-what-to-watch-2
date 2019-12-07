import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenreList} from "./genre-list";

configure({adapter: new Adapter()});

it(`should call genre handler on genre tab click`, () => {
  const onActiveChange = jest.fn();
  const preventDefault = jest.fn();

  const genreList = mount(<GenreList
    active={`All`}
    genres={{
      all: `All`,
      rest: [`some`]
    }}
    maxGenresToDisplay={1}
    onActiveChange={onActiveChange}
  />);

  const tab = genreList.find(`.catalog__genres-link`).first();
  tab.simulate(`click`, {preventDefault});
  expect(onActiveChange).toHaveBeenCalledTimes(1);
});
