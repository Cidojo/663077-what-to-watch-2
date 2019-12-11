const MAX_CATALOG_CARDS = 8;
const SHOW_MORE_STEP = 20;
const MAX_RELATED_CARDS_COUNT = 4;
const SMALL_MOVIE_CARD_MOUSE_ENTER_DELAY = 1000;
const DEFAULT_GENRE = `All genres`;

const Url = {
  BASE: `https://htmlacademy-react-2.appspot.com/wtw`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILM: `/films`,
  REVIEWS: `/review`
};

const Icon = {
  PLAY: `play`,
  PAUSE: `pause`,
  FULL_SCREEN: `full-screen`,
  ADD: `add`,
  IN_LIST: `in-list`
};

const IconProps = {
  [Icon.PLAY]: {
    name: `play-s`,
    viewBox: `0 0 19 19`,
    width: 19,
    height: 19
  },
  [Icon.PAUSE]: {
    name: `pause`,
    viewBox: `0 0 14 21`,
    width: 14,
    height: 21
  },
  [Icon.FULL_SCREEN]: {
    name: `full-screen`,
    viewBox: `0 0 21 21`,
    width: 21,
    height: 21
  },
  [Icon.ADD]: {
    name: `add`,
    viewBox: `0 0 19 19`,
    width: 19,
    height: 19
  },
  [Icon.IN_LIST]: {
    name: `in-list`,
    viewBox: `0 0 18 14`,
    width: 18,
    height: 14
  }
};

const MovieTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export {
  MAX_CATALOG_CARDS,
  MAX_RELATED_CARDS_COUNT,
  SHOW_MORE_STEP,
  SMALL_MOVIE_CARD_MOUSE_ENTER_DELAY,
  DEFAULT_GENRE,
  Url,
  Icon,
  IconProps,
  MovieTab
};
