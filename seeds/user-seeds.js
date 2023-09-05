const { User } = require('../models');

const userData = [

  {
    name: "Sal",
    email: "sal@hotmail.com",
    password: "$2b$10$2BZz0XcH09dKiORhuNP/O.JrirLxGtlo4CTTBALcXEC.v3Cuwez0e"
    // actualpassword:"password";

  },
  {
    name: "Lernantino",
    email: "lernantino@gmail.com",
    password: "$2b$10$sY8qaizIDuS9HkodKDG.F.fO96xb7LuAj.GJOT/GtpSjdV4j8c5C6"
    // actualpassword: "pass123"

  },

  {
    name: "sal",
    email: "sal@ex.com",
    password: "$2b$10$sWF860n2rH4rITbDtrcdJOXwlDxEY1x6y.BDANypJFgN2jwV3uNcK",
    // actualpassword:"password";
  },
  {
    name: "ram",
    email: "ram@ent.com",
    password: "$2b$10$Ot8udr/mHnL.vBcY0EJs6.jNBcPP/4CAsMLiUOtBABmEasOntg.J2",
    //actualpassword:"passent";
  }


];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;