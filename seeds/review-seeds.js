const { Review } = require('../models');

const reviewData = [
    {
        text: "Action Packed Thriller!",
        item_id: 11,
        rating:5 ,
        user_id:3,

    },

];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;