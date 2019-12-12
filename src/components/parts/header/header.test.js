import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Header} from './header.jsx';

configure({adapter: new Adapter()});

const props = {
  extraClassName: ``,
  title: ``,
  isWithUserBlock: false
};

it(`should render Header component without errors`, () => {
  const tree = shallow(<Header {...props}/>);
  expect(toJson(tree)).toMatchSnapshot();
});

it(`should render Header component without errors when with UserBlock`, () => {
  const tree = shallow(<Header {...props} isWithUserBlock={true} />);
  expect(toJson(tree)).toMatchSnapshot();
});
