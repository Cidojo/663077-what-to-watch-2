import * as React from 'react';
import {CardNavigation} from './card-navigation.jsx';
import * as renderer from 'react-test-renderer';
import {MovieCardOverview} from "../movie-card-overview/movie-card-overview";
import {MovieCardDetails} from "../movie-card-details/movie-card-details";
import {MovieCardReviews} from "../movie-card-reviews/movie-card-reviews";

it(`should render component without errors`, () => {
  const tabs = [{
    title: `Overview`,
    component: MovieCardOverview
  }, {
    title: `Details`,
    component: MovieCardDetails
  }, {
    title: `Reviews`,
    component: MovieCardReviews
  }];

  const tree = renderer
    .create(<CardNavigation
      activeTab={``}
      onTabChange={() => {}}
      tabs={tabs.map((tab) => tab.title)}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
