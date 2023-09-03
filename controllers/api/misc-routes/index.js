const router = require('express').Router();
const { Item, User, Review } = require('../../../models');

router.get('/year/:year', async (req, res) => {
  try {
    const itemData = await Item.findAll({
      where: {
        year: req.params.year,
      },
      include: [{ model: Review }],
    });

    if (itemData.length === 0) {
      return res
        .status(404)
        .json({ message: 'No item(s) found for the specified year.' });
    }
    res.status(200).json(itemData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/rating/:rating', async (req, res) => {
  const ratingFilter = parseInt(req.params.rating);
  try {
    const reviewData = await Review.findAll({
      where: {
        rating: ratingFilter,
      },
      include: [{ model: Item }],
    });

    if (reviewData.length === 0) {
      return res
        .status(404)
        .json({ message: 'No reviews found for the specified rating.' });
    }

    res.status(200).json(reviewData);
    // res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/groupyears', async (req, res) => {
  try {
    const years = await Item.aggregate('year', 'DISTINCT', {
      plain: false,
      order: [['year', 'ASC']],
    });

    const groupedItems = [];
    for (const year of years) {
      const itemData = await Item.findAll({
        where: {
          year: year.DISTINCT,
        },
      });
      groupedItems.push({ year: year.DISTINCT });
    }
    res.status(200).json(groupedItems);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
