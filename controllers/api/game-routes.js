const router = require('express').Router();
const { Game, Review } = require('../../models');

// the `/api/games` endpoint

router.get('/', async (req, res) => {
  try {
    const gameData = await Game.findAll({
      include: [{ model: Review }],
    });
    //res.status(200).json(gameData);
    res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id, {
      include: [{ model: Review }],
    });
    //res.status(200).json(gameData);
    res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const gameData = await Game.create(req.body);
    //res.status(200).json(gameData);
    res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const gameData = await Game.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    //res.status(200).json(gameData);
    res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const gameData = await Game.destroy({
      where: {
        id: req.params.id,
      },
    });
    //res.status(200).json(gameData);
    res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
