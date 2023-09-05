const router = require('express').Router();
const { Item, Review, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const itemData = await Item.findAll({
      include: [{ model: Review }],
    });
    const items = itemData.map((item) => item.get({ plain: true }));
    res.render('homepage', {
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
      include: [
        {
          model: Review,
          include: [{ model: Item }],
        },
      ],
    });

    const user = userData.get({ plain: true });
    const reviewData = user.reviews.map((review) => review.item);
    res.render('dashboard', {
      user,
      reviewData,
      logged_in: true,
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
