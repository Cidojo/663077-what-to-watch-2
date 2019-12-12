import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import {HomePage} from './home-page.jsx';

configure({adapter: new Adapter()});

const props = {
  genre: ``,
  genres: [],
  activeCard: {},
  catalogCards: [],
  onShowPlayer: () => {},
  onClosePlayer: () => {},
  isPlayerShown: false
};

it(`should render HomePage component without errors`, () => {
  const tree = shallow(<HomePage {...props}/>);
  expect(toJson(tree)).toMatchSnapshot();
});
