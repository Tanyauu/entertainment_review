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
  },
  {
    name: "Harry",
    email: "Harry@ent.com",
    password: "$2b$10$dSw4mc0GcbrltHnDro12m.cmtVezaz8uq1Tu/4rK0HySJoFutD9VG",
    //actualpassword:"RedStone";
  },
  {
    name: "Eric",
    email: "Eric@ent.com",
    password: "$2b$10$bucmd863fCCCD8ckqnRNJuy0nBUoiIqha6bxRtp9XVj0PDOhsO/q6",
    //actualpassword:"RoseBud";
  },
  {
    name: "Emma",
    email: "Emma@ent.com",
    password: "$2b$10$vEAL/EJm7F140m6MJqSnyuc1s0AcCkGrOWwAP0T8Mi.Zz5I7Jkwjq",
    //actualpassword:"Genocide";
  },
  {
    name: "Pete",
    email: "Pete@ent.com",
    password: "$2b$10$16p6qk.pszVSnKX.GQGGieFAtXWt7Jz6uw1eEdcQs1zOuzTKb8GQC",
    //actualpassword:"AlphaBeta";
  },
  {
    name: "Solomon",
    email: "Solomon@ent.com",
    password: "$2b$10$RLkgL9HhrRIbdZ.VU6O38.DgncKrDTG8u8ltVKIBVe4MuB.x3CJ3a",
    //actualpassword:"KingsCross";
  },
  {
    name: "David",
    email: "David@ent.com",
    password: "$2b$10$ovh1YhgCjZlODKDUvwIuv.WDg8jTDm4SFHkqkHg1uH31bIycO.mS.",
    //actualpassword:"DevilsCave";
  },



];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;