import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ShowMoreButton} from './show-more-button.jsx';

configure({adapter: new Adapter()});

it(`should call show more button handler`, () => {
  const onButtonClick = jest.fn();

  const showMoreButton = mount(
      <ShowMoreButton
        onButtonClick={onButtonClick}
      />);

  const button = showMoreButton.find(`button`);
  button.simulate(`click`);
  expect(onButtonClick).toHaveBeenCalledTimes(1);
});
