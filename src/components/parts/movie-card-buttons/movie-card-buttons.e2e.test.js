import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MovieCardButtons} from './movie-card-buttons.jsx';

configure({adapter: new Adapter()});

describe(`it tests movie card buttons functionality`, () => {
  it(`onAddToFavoriteClick is called with correct params for current card`, () => {
    const onAddToFavoriteClick = jest.fn();

    const movieCardButtons = mount(<MovieCardButtons
      onPlayButtonClick={() => {
      }}
      onAddToFavoriteClick={onAddToFavoriteClick}
      card={{id: 1, isFavorite: false}}
    />);

    const addToFavoriteButton = movieCardButtons.find(`button.btn--list`);
    addToFavoriteButton.simulate(`click`);
    expect(onAddToFavoriteClick).toHaveBeenCalledWith(1, false);
  });

  it(`onPlayButtonClick is called on click`, () => {
    const onPlayButtonClick = jest.fn();

    const movieCardButtons = mount(<MovieCardButtons
      onPlayButtonClick={onPlayButtonClick}
      onAddToFavoriteClick={() => {
      }}
      card={{}}
    />);

    const playButton = movieCardButtons.find(`button.btn--play`);
    playButton.simulate(`click`);
    expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
  });
});
