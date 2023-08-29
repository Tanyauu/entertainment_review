const { Game } = require('../models');

const gameData = [
  {
    game_name: 'Hollow Knight',
    info: 'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.',
  },
  {
    game_name: 'NeverSong',


  },
  {
    game_name: 'GTA-5',
  },
  {
    game_name: 'Elden Ring',
  },
  {
    game_name: 'Spiderman',
  },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;