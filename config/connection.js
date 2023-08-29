const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

<<<<<<< HEAD
module.exports = sequelize;
=======
module.exports = sequelize;
>>>>>>> 17cdba55ca90c0bcb4842f98a93cc72942610f60
