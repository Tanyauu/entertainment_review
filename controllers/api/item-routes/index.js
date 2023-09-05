const router = require('express').Router();
const { Item, Review, User } = require('../../../models');

// The `/api/items` endpoint

router.get('/', async (req, res) => {
  try {
    const itemData = await Item.findAll({
      include: [{ model: Review }],
    });
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const itemData = await Item.findByPk(req.params.id, {
      include: [{model: Review, include: [{model: User, attributes: {
        exclude: ['password', 'email'],
      },}]
      }],
    });

    if (!itemData) {
      res.status(404).json({ message: 'No item found with this id!' });
      return;
    }
    const item = itemData.get({ plain: true });
    res.render('item', {
      item,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
