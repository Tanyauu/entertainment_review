const router = require('express').Router();
const { TV, Review } = require('../../models');

// the `/api/tvs` endpoint

router.get('/', async (req, res) => {
  try {
    const tvData = await TV.findAll({
      include: [{ model: Review }],
    });
    res.status(200).json(tvData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tvData = await TV.findByPk(req.params.id, {
      include: [{ model: Review }],
    });
    res.status(200).json(tvData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tvData = await TV.create(req.body);
    res.status(200).json(tvData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tvData = await TV.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tvData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tvData = await TV.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tvData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
