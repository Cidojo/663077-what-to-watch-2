import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CardNavigation} from './card-navigation.jsx';
import {MovieCardOverview} from './../movie-card-overview/movie-card-overview.jsx';
import {MovieCardDetails} from './../movie-card-details/movie-card-details.jsx';
import {MovieCardReviews} from './../movie-card-reviews/movie-card-reviews.jsx';

configure({adapter: new Adapter()});

it(`should call tab click handler on click`, () => {
  const onTabChange = jest.fn();
  const preventDefault = jest.fn();

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

  const cardNavigation = mount(<CardNavigation
    activeTab={tabs[1].title}
    onTabChange={onTabChange}
    tabs={tabs.map((tab) => tab.title)}
  />);

  const overviewTab = cardNavigation.find(`.movie-nav__item:first-child a`);
  overviewTab.simulate(`click`, {preventDefault});
  expect(onTabChange).toHaveBeenCalledWith(tabs[0].title);
});
