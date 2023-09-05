
const seedItems = require('./item-seeds');
const seedUsers = require('./user-seeds');

const seedReviews = require('./review-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');


 await seedUsers();
  console.log('\n----- Users SEEDED -----\n');
 
  await seedItems();
  console.log('\n----- ITEMS SEEDED -----\n');
  
  await seedReviews();
  console.log('\n----- REVIEWS SEEDED -----\n');


  process.exit(0);
};

seedAll();