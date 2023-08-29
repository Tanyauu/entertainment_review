const { TV } = require('../models');

const tvData = [
    {
        tv_name: '',
        info: '',
    },
    {
        tv_name: '',
        info: '',
    },
    {
        tv_name: '',
        info: '',
    },
    {
        tv_name: '',
        info: '',
    },
    {
        tv_name: '',
        info: '',
    },
];

const seedTVs = () => TV.bulkCreate(tvData);

module.exports = seedTVs;