const userServerKeyMap = {
  [`email`]: `email`,
  [`id`]: `id`,
  [`name`]: `name`,
  [`avatar_url`]: `avatarUrl`,
};

const createHash = (template) => {
  return Object.keys(template).reduce((hash, key) => {
    hash[key] = convertString(key);
    return hash;
  }, {});
};

const adaptMovie = (movie, providedHash) => {
  if (!movie) {
    return movie;
  }

  let localHash = providedHash;

  if (!localHash) {
    localHash = createHash(movie);
  }

  return Object.keys(movie).reduce((adaptedCard, key) => {
    adaptedCard[localHash[key]] = movie[key];

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
  if (!movies.length) {
    return movies;
  }
  const hash = createHash(movies[0]);
  return movies.map((movie) => {
    return adaptMovie(movie, hash);
  });
};

const convertString = (str) => {
  return str.split(``).reduceRight((res, prev) => prev === `_` ? res[0].toUpperCase() + res.substr(1) : prev + res, ``);
};

export {adaptMovie, adaptMovies, adaptUserData};
