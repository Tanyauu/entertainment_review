const { Review } = require('../models');

const reviewData = [
    {
        text: "Action Packed Thriller!",
        tv_id: 1,

    },

];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;