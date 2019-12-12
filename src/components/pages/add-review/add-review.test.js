import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import {AddReview} from './add-review';

configure({adapter: new Adapter()});

const props = {
  activeCard: {
    id: 0,
    name: ``,
    backgroundImage: ``,
    posterImage: ``,
    backgroundColor: ``
  },
  onSubmit: () => {},
  onCommentInput: () => {},
  onRatingChange: () =>{},
  isValid: false,
  isDisabled: false
};

it(`should render AddReview component without errors`, () => {
  const tree = shallow(<AddReview {...props}/>);
  expect(toJson(tree)).toMatchSnapshot();
});
