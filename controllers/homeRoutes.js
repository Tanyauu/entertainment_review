const router = require('express').Router();
const { Game, Movie, TV, Review } = require('../models');

router.get('/', async (req, res) => {
  try {
    const gameData = await Game.findAll({
      include: [{ model: Review }],
    });
    const movieData = await Movie.findAll({
      include: [{ model: Review }],
    });
    const tvData = await TV.findAll({
      include: [{ model: Review }],
    });
    res.render('homepage', {
      gameData,
      movieData,
      tvData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
