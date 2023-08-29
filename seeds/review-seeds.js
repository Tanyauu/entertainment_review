const { Review } = require('../models');

const reviewData = [
    {
        Review: "Action Packed Thriller!",
        tv_id: 1,

    },

];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;