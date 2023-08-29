const { Movie } = require('../models');

const movieData = [
  {
    movie_name: '',
    info: '',
  },
  {
    movie_name: '',
    info: '',
  },
  {
    movie_name: '',
    info: '',
  },
  {
    movie_name: '',
    info: '',
  },
  {
    movie_name: '',
    info: '',
  },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;