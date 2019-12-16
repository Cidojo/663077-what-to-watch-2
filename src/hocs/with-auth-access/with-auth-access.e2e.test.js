import React from 'react';
import {configure, shallow} from 'enzyme';
import {withAuthAccess} from './with-auth-access.jsx';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const Component = () => <div />;
const WrappedComponent = withAuthAccess(Component);

describe(`the withAuthAccess hoc should render`, () => {
  it(`component when user is authorized`, () => {
    const isAuthorized = true;

    const wrapper = shallow(<WrappedComponent isAuthorized={isAuthorized}/>);
    expect(wrapper.find(Component).length).toEqual(1);
  });

  it(`redirect when user not authorized`, () => {
    const isAuthorized = false;

    const wrapper = shallow(<WrappedComponent isAuthorized={isAuthorized}/>);
    expect(wrapper.find(`Redirect`).length).toEqual(1);
  });
});
