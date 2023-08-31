const router = require('express').Router();
const { Item, Review } = require('../models');

router.get('/', async (req, res) => {
  try {
    // const gameData = await Game.findAll({
    //   include: [{ model: Review }],
    // });
    // const movieData = await Movie.findAll({
    //   include: [{ model: Review }],
    // });
    // const tvData = await TV.findAll({
    //   include: [{ model: Review }],
    // });
    const itemData = await Item.findAll({
      include: [{ model: Review }],
    });

    res.render('homepage', {
      // gameData,
      // movieData,
      // tvData,
      itemData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
