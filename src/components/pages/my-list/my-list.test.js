import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import {MyList} from './my-list.jsx';

configure({adapter: new Adapter()});

const props = {
  favoriteCards: []
};

it(`should render MyList component without errors`, () => {
  const tree = shallow(<MyList {...props}/>);
  expect(toJson(tree)).toMatchSnapshot();
});
