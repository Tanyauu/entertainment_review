const seedMovies = require('./movie-seeds');
const seedGames = require('./game-seeds');
const seedTvs = require('./tv-seeds');
const seedItems = require('./item-seeds');
const seedReviews = require('./review-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  // await seedMovies();
  // console.log('\n----- MOVIES SEEDED -----\n');

  // await seedGames();
  // console.log('\n----- GAMES SEEDED -----\n');

  // await seedTvs();
  // console.log('\n----- TVS SEEDED -----\n');

  // await seedReviews();
  // console.log('\n----- REVIEWS SEEDED -----\n');
  await seedItems();
  console.log('\n----- ITEMS SEEDED -----\n');


  process.exit(0);
};

seedAll();