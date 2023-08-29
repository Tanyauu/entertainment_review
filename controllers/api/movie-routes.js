const router = require('express').Router();
const { Movie, Review } = require('../../models');

// the `/api/movies` endpoint

router.get('/', async (req, res) => {
  try {
    const movieData = await Movie.findAll({
      include: [{ model: Review }],
    });
    // res.status(200).json(movieData);
    res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id, {
      include: [{ model: Review }],
    });
    // res.status(200).json(movieData);
    res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const movieData = await Movie.create(req.body);
    // res.status(200).json(movieData);
    res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const movieData = await Movie.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // res.status(200).json(movieData);
    res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const movieData = await Movie.destroy({
      where: {
        id: req.params.id,
      },
    });
    // res.status(200).json(movieData);
    res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
