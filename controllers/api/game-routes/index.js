const router = require('express').Router();
const { Item, Review } = require('../../../models');

// the `/api/games` endpoint

// Define category variable
const category = 'Game';

router.get('/', async (req, res) => {
  try {
    const gameData = await Item.findAll({
      where: {
        category: category,
      },
      include: [{ model: Review }],
    });
    res.status(200).json(gameData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const gameData = await Item.findOne({
      where: {
        id: req.params.id,
        category: category,
      },
      include: [{ model: Review }],
    });

    if (!gameData) {
      return res.status(404).json({ message: 'No game found with this id!' });
    }
    res.status(200).json(gameData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const gameData = await Game.create(req.body);
    res.status(200).json(gameData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const gameData = await Game.update(req.body, {
      where: {
        category: category,
        id: req.params.id,
      },
    });
    res.status(200).json(gameData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const gameData = await Game.destroy({
      where: {
        category: category,
        id: req.params.id,
      },
    });
    res.status(200).json(gameData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
