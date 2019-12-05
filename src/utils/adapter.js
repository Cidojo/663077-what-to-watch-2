const serverKeyMap = {
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

const adapterMovie = (movie) => {
  return Object.keys(movie).reduce((adaptedCard, key) => {
    adaptedCard[serverKeyMap[key]] = movie[key];

    return adaptedCard;
  }, {});
};

const adapterMovies = (movies) => {
  return movies.map((movie) => {
    return adapterMovie(movie);
  });
};

export {adapterMovie, adapterMovies};
