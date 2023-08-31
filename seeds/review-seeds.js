const { Review } = require('../models');

const reviewData = [
    {
        text: "Action Packed Thriller!",
        item_id: 1,
        rating:5 ,
        user_id:2,

    },

];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;