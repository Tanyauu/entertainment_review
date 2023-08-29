const { Movie } = require('../models');

const movieData = [
  {
    movie_name: 'The Godfather',
    info: 'Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo\'s novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don\'s youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal',
    year:,
  },
  {
    movie_name: 'The Shawshank Redemption',
    info: 'Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn\'t commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 year',
    year:,
  },
  {
    movie_name: 'Pulp Fiction',
    info: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    year:,
  },
  {
    movie_name: '2001: A Space Odyssey',
    info: 'After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins: a spacecraft manned by two men and the supercomputer HAL 9000.',
    year:,
  },
  {
    movie_name: 'Citizen Kane',
    info: 'Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: \'Rosebud.\'',
    year:,
  },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;