const router = require('express').Router();
const { Item, Review } = require('../../../models');

// The `/api/items` endpoint

router.get('/', async (req, res) => {
  try {
    const itemData = await Item.findAll();
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const itemData = await Item.findByPk(req.params.id, {
      include: [{ model: Review }],
    });

    if (!itemData) {
      res.status(404).json({ message: 'No item found with this id!' });
      return;
    }

    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
