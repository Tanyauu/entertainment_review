const router = require('express').Router();
const { Item, Review, User } = require('../models');

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
    const items = itemData.map((item) => item.get({ plain: true }));
    res.render('homepage', {
      // gameData,
      // movieData,
      // tvData,
      items,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/item/:id', async (req, res) => {
  try {
    const itemData = await Item.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
          model: Review
        },
      ],
    });

    const item = itemData.get({ plain: true });

    res.render('item', {
      ...item,
      // logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
