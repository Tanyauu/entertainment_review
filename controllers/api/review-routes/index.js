const router = require('express').Router();
const { Item, User, Review } = require('../../../models');

// The `/api/reviews` endpoint

router.get('/', async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      include: [
        { model: Item },
        {
          model: User,
          attributes: {
            exclude: ['password', 'email'],
          },
        },
      ],
    });
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const reviewData = await Review.create(req.body);
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const reviewData = await Review.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
