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

router.get('/:id', async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id, {
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
    const reviewData = await Review.create({
      text: req.body.text,
      rating: req.body.rating,
      item_id: req.body.item_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const reviewData = await Review.update(
      {
        text: req.body.text,
        rating: req.body.rating,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!reviewData) {
      return res.status(404).json({ message: 'No review found with this id!' });
    }
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
