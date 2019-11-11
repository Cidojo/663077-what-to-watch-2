const Genres = {
  ALL: {
    name: `All genres`,
    link: `#`
  },
  COMEDIES: {
    name: `Comedies`,
    link: `#`
  },
  CRIME: {
    name: `Crime`,
    link: `#`
  },
  DOCUMENTARY: {
    name: `Documentary`,
    link: `#`
  },
  DRAMAS: {
    name: `Dramas`,
    link: `#`
  },
  HORROR: {
    name: `Horror`,
    link: `#`
  },
  KIDS_AND_FAMILY: {
    name: `Kids & Family`,
    link: `#`
  },
  ROMANCE: {
    name: `Romance`,
    link: `#`
  },
  SCI_FI: {
    name: `Sci-Fi`,
    link: `#`
  },
  THRILLERS: {
    name: `Thrillers`,
    link: `#`
  }
};

const movieCards = [{
  id: 1,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  link: `/details`,
  imgSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  posterSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  imgDescription: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 2,
  title: `Bohemian Rhapsody`,
  link: `/details`,
  imgSrc: `img/bohemian-rhapsody.jpg`,
  posterSrc: `img/bohemian-rhapsody.jpg`,
  imgDescription: `Bohemian Rhapsody`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 3,
  title: `Macbeth`,
  link: `/details`,
  imgSrc: `img/macbeth.jpg`,
  posterSrc: `img/macbeth.jpg`,
  imgDescription: `Macbeth`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 4,
  title: `Aviator`,
  link: `/details`,
  imgSrc: `img/aviator.jpg`,
  posterSrc: `img/aviator.jpg`,
  imgDescription: `Aviator`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 5,
  title: `We need to talk about Kevin`,
  link: `/details`,
  imgSrc: `img/we-need-to-talk-about-kevin.jpg`,
  posterSrc: `img/we-need-to-talk-about-kevin.jpg`,
  imgDescription: `We need to talk about Kevin`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 6,
  title: `What We Do in the Shadows`,
  link: `/details`,
  imgSrc: `img/what-we-do-in-the-shadows.jpg`,
  posterSrc: `img/what-we-do-in-the-shadows.jpg`,
  imgDescription: `What We Do in the Shadows`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 7,
  title: `Revenant`,
  link: `/details`,
  imgSrc: `img/revenant.jpg`,
  posterSrc: `img/revenant.jpg`,
  imgDescription: `Revenant`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 8,
  title: `Johnny English`,
  link: `/details`,
  imgSrc: `img/johnny-english.jpg`,
  posterSrc: `img/johnny-english.jpg`,
  imgDescription: `Johnny English`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 9,
  title: `Shutter Island`,
  link: `/details`,
  imgSrc: `img/shutter-island.jpg`,
  posterSrc: `img/shutter-island.jpg`,
  imgDescription: `Shutter Island`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 10,
  title: `Pulp Fiction`,
  link: `/details`,
  imgSrc: `img/pulp-fiction.jpg`,
  posterSrc: `img/pulp-fiction.jpg`,
  imgDescription: `Pulp Fiction`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 11,
  title: `No Country for Old Men`,
  link: `/details`,
  imgSrc: `img/no-country-for-old-men.jpg`,
  posterSrc: `img/no-country-for-old-men.jpg`,
  imgDescription: `No Country for Old Men`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 12,
  title: `Snatch`,
  link: `/details`,
  imgSrc: `img/snatch.jpg`,
  posterSrc: `img/snatch.jpg`,
  imgDescription: `Snatch`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 13,
  title: `Moonrise Kingdom`,
  link: `/details`,
  imgSrc: `img/moonrise-kingdom.jpg`,
  posterSrc: `img/moonrise-kingdom.jpg`,
  imgDescription: `Moonrise Kingdom`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 14,
  title: `Seven Years in Tibet`,
  link: `/details`,
  imgSrc: `img/seven-years-in-tibet.jpg`,
  posterSrc: `img/seven-years-in-tibet.jpg`,
  imgDescription: `Seven Years in Tibet`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 15,
  title: `Midnight Special`,
  link: `/details`,
  imgSrc: `img/midnight-special.jpg`,
  posterSrc: `img/midnight-special.jpg`,
  imgDescription: `Midnight Special`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 16,
  title: `War of the Worlds`,
  link: `/details`,
  imgSrc: `img/war-of-the-worlds.jpg`,
  posterSrc: `img/war-of-the-worlds.jpg`,
  imgDescription: `War of the Worlds`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 17,
  title: `Dardjeeling Limited`,
  link: `/details`,
  imgSrc: `img/dardjeeling-limited.jpg`,
  posterSrc: `img/dardjeeling-limited.jpg`,
  imgDescription: `Dardjeeling Limited`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 18,
  title: `Orlando`,
  link: `/details`,
  imgSrc: `img/orlando.jpg`,
  posterSrc: `img/orlando.jpg`,
  imgDescription: `Orlando`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 19,
  title: `Mindhunter`,
  link: `/details`,
  imgSrc: `img/mindhunter.jpg`,
  posterSrc: `img/mindhunter.jpg`,
  imgDescription: `Mindhunter`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 20,
  title: `Midnight Special`,
  link: `/details`,
  imgSrc: `img/midnight-special.jpg`,
  posterSrc: `img/midnight-special.jpg`,
  imgDescription: `Midnight Special`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}, {
  id: 21,
  title: `The Grand Budapest Hotel`,
  link: `/details`,
  imgSrc: `img/bg-the-grand-budapest-hotel.jpg`,
  posterSrc: `img/the-grand-budapest-hotel-poster.jpg`,
  imgDescription: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  rating: {
    score: `8.9`,
    level: `Very good`,
    count: 240
  }
}];

export {Genres, movieCards};
