import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Button} from './button.jsx';

configure({adapter: new Adapter()});

it(`Button handler should be called on click`, () => {
  const onClick = jest.fn();
  const preventDefault = jest.fn();

  const button = mount(<Button
    onClick={onClick}
  />);

  const buttonHTML = button.find(`button`);
  buttonHTML.simulate(`click`, {preventDefault});
  expect(onClick).toHaveBeenCalledTimes(1);
});
