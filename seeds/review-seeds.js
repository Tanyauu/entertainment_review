const { Review } = require('../models');

const reviewData = [
    {
        text: "Action Packed Thriller!",
        item_id: 11,
        rating:5 ,
        user_id:3,

    },
    {
        text: "Neat game with a creepy atmosphere. The game is solid and the sounds and music are top notch",
        item_id: 2 ,
        rating: 4,
        user_id: 3,

    },
    {
        text: "The best movie ever, it's a GREAT movie! Marlon Brando gives a great performance as Don Vito Corleone, so does Al Pacino and Robert Duvall, it is the best drama in history",
        item_id: 6,
        rating: 5,
        user_id: 2,

    },
    {
        text: "Breaking Bad was an amazing show. Once you start watching Breaking Bad from Season 1, it will feel a bit slow but gradually as the story progresses, it becomes strongly addictive and gets very interesting.",
        item_id: 14 ,
        rating: 3,
        user_id:1,

    },
    {
        text: "THE GREATEST COMEDY SITCOMS OF ALL TIME!!!",
        item_id: 12,
        rating: 5,
        user_id:2,

    },
    {
        text: "Long story short, 12/10 game of the decade. You should play this game.",
        item_id: 4 ,
        rating: 5,
        user_id:2,

    },
    {
        text: "A bit overrated honestly. The swinging is fun but it feels more restrictive compared to Spider-Man 2 and the open world feels lifeless. You can't hang onto one thread swinging around as the game will launch you off automatically or swing onto a helicopter out to the statue of liberty which was one of the best things to do in that game.",
        item_id: 5 ,
        rating: 2,
        user_id:3,

    },
    {
        text: "This is OK, kind of repeated concept in every season and boring",
        item_id: 13 ,
        rating: 3,
        user_id:1,

    },
    {
        text: "I wish I could give 0 stars",
        item_id: 15,
        rating: 1,
        user_id:2,

    },
    // {
    //     text: "",
    //     item_id:15,
    //     rating: ,
    //     user_id:  ,

    // },
    {
        text: "It’s not hard to get lost in the deep, subterranean world of Hollow Knight – and I mean that in more ways than one. ",
        item_id: 1 ,
        rating: 5,
        user_id: 2,

    },
    {
        text: "Grand Theft Auto V has an average Metacritic score of 97% across all platforms it's been released on, and is currently the third best selling game of all time, right behind Tetris and Minecraft.",
        item_id: 3 ,
        rating: 4 ,
        user_id: 1,

    },
    {
        text: "The Shawshank Redemption is a cinematic gem that transcends the boundaries of time and genre, leaving an indelible mark on the hearts of its viewers.",
        item_id: 7,
        rating: 5,
        user_id: 1,

    },
    {
        text: "Movies are just not made like this anymore. The scenes are prolonged with smart acting, genius scripting",
        item_id: 8 ,
        rating: 4,
        user_id: 3,

    },
    {
        text: "To me, this is not only Kubrick's best film but also a milestone of the genre. It is quite long at around two and a quarter hours, and it is slow, that I agree with. But it is never boring, well not to me it isn't.",
        item_id: 9 ,
        rating: 5,
        user_id: 2,

    },
    {
        text: "Greatest classic mystery film",
        item_id: 10 ,
        rating: 5,
        user_id: 1 ,

    },
    // {
    //     text: "",
    //     item_id: 16,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 17,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 18,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 19,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id:  19,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 19 ,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 20,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 21,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 22,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 23,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 24,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 24,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 24,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 24,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 25,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 26,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 27,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 28,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id: 29,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id:30,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id:30,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id:30,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id:  ,
    //     rating: ,
    //     user_id:  ,

    // },
    // {
    //     text: "",
    //     item_id:  ,
    //     rating: ,
    //     user_id:  ,

    // },



];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;