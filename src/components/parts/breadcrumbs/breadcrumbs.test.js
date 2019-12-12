import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Breadcrumbs} from './breadcrumbs.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  activeCard: {
    id: 0,
    name: ``
  }
};

it(`should render Breadcrumbs component without errors`, () => {
  const tree = renderer.create(<BrowserRouter><Breadcrumbs {...props} /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
