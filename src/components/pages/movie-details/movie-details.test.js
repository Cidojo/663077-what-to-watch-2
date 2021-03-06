import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import {MovieDetails} from './movie-details.jsx';

configure({adapter: new Adapter()});

const props = {
  activeCard: {},
  relatedMovies: [],
  isPlayerShown: false,
  onShowPlayer: () => {},
  onClosePlayer: () => {},
  onLoadReviews: () => {},
  reviews: [],
  match: {
    params: {
      id: `0`
    }
  }
};

it(`should render MovieDetails component without errors`, () => {
  const tree = shallow(<MovieDetails {...props}/>);
  expect(toJson(tree)).toMatchSnapshot();
});
