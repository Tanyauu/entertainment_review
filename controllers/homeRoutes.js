const router = require('express').Router();
const { Item, Review, User } = require('../models');
const withAuth = require('../utils/auth');

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

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Item, through: Review }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
