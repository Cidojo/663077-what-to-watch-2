const movieServerKeyMap = {
  [`name`]: `name`,
  [`poster_image`]: `posterImage`,
  [`preview_image`]: `previewImage`,
  [`background_image`]: `backgroundImage`,
  [`background_color`]: `backgroundColor`,
  [`description`]: `description`,
  [`rating`]: `rating`,
  [`scores_count`]: `scoresCount`,
  [`director`]: `director`,
  [`starring`]: `starring`,
  [`run_time`]: `runTime`,
  [`genre`]: `genre`,
  [`released`]: `released`,
  [`id`]: `id`,
  [`is_favorite`]: `isFavorite`,
  [`video_link`]: `videoLink`,
  [`preview_video_link`]: `previewVideoLink`
};

const userServerKeyMap = {
  [`email`]: `email`,
  [`id`]: `id`,
  [`name`]: `name`,
  [`avatar_url`]: `avatarUrl`,
};

const adaptMovie = (movie) => {
  return Object.keys(movie).reduce((adaptedCard, key) => {
    adaptedCard[movieServerKeyMap[key]] = movie[key];

    return adaptedCard;
  }, {});
};

const adaptUserData = (userData) => {
  return Object.keys(userServerKeyMap).reduce((user, key) => {
    user[userServerKeyMap[key]] = userData[key];

    return user;
  }, {});
};

const adaptMovies = (movies) => {
  return movies.map((movie) => {
    return adaptMovie(movie);
  });
};

export {adaptMovie, adaptMovies, adaptUserData};
