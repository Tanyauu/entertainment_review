const router = require('express').Router();
const { Item, Review } = require('../../../models');

// the `/api/movies` endpoint

// define category variable
const category = 'Movie';

router.get('/', async (req, res) => {
  try {
    const movieData = await Item.findAll({
      where: {
        category: category,
      },
      include: [{ model: Review }],
    });
    res.status(200).json(movieData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const movieData = await Item.findByPk(req.params.id, {
      where: {
        category: category,
      },
      include: [{ model: Review }],
    });

    res.status(200).json(movieData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const movieData = await Item.create(req.body);
    // res.status(200).json(movieData);
    res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const movieData = await Item.update(req.body, {
      where: {
        category: category,
        id: req.params.id,
      },
    });
    res.status(200).json(movieData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const movieData = await Item.destroy({
      where: {
        category: category,
        id: req.params.id,
      },
    });
    res.status(200).json(movieData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
