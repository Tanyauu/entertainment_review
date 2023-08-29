const { TV } = require('../models');

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

const seedTVs = () => TV.bulkCreate(tvData);

module.exports = seedTVs;