const router = require('express').Router();
const gameRoutes = require('./game-routes');
const movieRoutes = require('./movie-routes');
const tvRoutes = require('./tv-routes');
const reviewRoutes = require('./review-routes');
// const userRoutes = require('./user-routes');

router.use('/games', gameRoutes);
router.use('/movies', movieRoutes);
router.use('/tvs', tvRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
