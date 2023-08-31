const { Game } = require('../models');

const gameData = [
  {
    game_name: 'Hollow Knight',
    info: 'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.',
    year: 2017,
  },
  {
    name: 'NeverSong',
    info: 'Help little Peet hack-and-slash his way through a beautifully haunting coma. A hand-drawn action-adventure through a dreamy world filled with fleshy monsters, insane grown-ups, and sad children looking for their mommies.',
    year: 2019,


  },
  {
    game_name: 'GTA-5',
    info: 'Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.',
    year: 2013,
  },
  {
    game_name: 'Elden Ring',
    info: 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    year: 2022,
  },
  {
    game_name: 'Spiderman',
    info: 'In Marvel’s Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel’s New York. Web-swing through vibrant neighborhoods and defeat villains with epic takedowns.',
    year: 2018,
  },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;