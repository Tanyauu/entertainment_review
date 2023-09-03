const router = require('express').Router();
const { Item, Review } = require('../../../models');

// the `/api/tvs` endpoint

// define category variable
const category = 'TV';

router.get('/', async (req, res) => {
  try {
    const tvData = await Item.findAll({
      where: {
        category: category,
      },
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
    const tvData = await Item.findOne({
      where: {
        id: req.params.id,
        category: category,
      },
      include: [{ model: Review }],
    });

    if (!tvData) {
      return res.status(404).json({ message: 'No tv found with this id!' });
    }
    res.status(200).json(tvData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tvData = await Item.create(req.body);
    res.status(200).json(tvData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tvData = await Item.update(req.body, {
      where: {
        category: category,
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
    const tvData = await Item.destroy({
      where: {
        category: category,
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
