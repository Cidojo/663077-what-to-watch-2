import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import {App} from './app.jsx';

configure({adapter: new Adapter()});

it(`should render App component without errors`, () => {
  const tree = shallow(<App/>);
  expect(toJson(tree)).toMatchSnapshot();
});
