const { Review } = require('../models');

const reviewData = [
    {
        text: "Action Packed Thriller!",
        item_id: 1,
        rating:5 ,
        

    },

];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;