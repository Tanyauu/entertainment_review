const { Item } = require('../models');

const itemData = [
  {
    category:'Game',
    name: 'Hollow Knight',
    info: 'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.',
    year: 2017,
  },
  {
    category:'Game',
    name: 'NeverSong',
    info: 'Help little Peet hack-and-slash his way through a beautifully haunting coma. A hand-drawn action-adventure through a dreamy world filled with fleshy monsters, insane grown-ups, and sad children looking for their mommies.',
    year: 2019,


  },
  {
    category:'Game',
    name: 'GTA-5',
    info: 'Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.',
    year: 2013,
  },
  {
    category:'Game',
    name: 'Elden Ring',
    info: 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    year: 2022,
  },
  {
    category:'Game',
    name: 'Spiderman',
    info: 'In Marvel’s Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel’s New York. Web-swing through vibrant neighborhoods and defeat villains with epic takedowns.',
    year: 2018,
  },
  {
    category:'Movie',
    name: 'The Godfather',
    info: 'Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo\'s novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don\'s youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal',
    year: 1972,
  },
  {
    category:'Movie',
    name: 'The Shawshank Redemption',
    info: 'Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn\'t commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 year',
    year: 1994,
  },
  {
    category:'Movie',
    name: 'Pulp Fiction',
    info: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    year: 1994,
  },
  {
    category:'Movie',
    name: '2001: A Space Odyssey',
    info: 'After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins: a spacecraft manned by two men and the supercomputer HAL 9000.',
    year: 1968,
  },
  {
    category:'Movie',
    name: 'Citizen Kane',
    info: 'Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: \'Rosebud.\'',
    year: 1941,
  },
  {
        category:'TV',
        name: '24 S1',
        info: ' 24 is a serial drama starring Kiefer Sutherland as central character Jack Bauer, an agent with the Counter Terrorist Unit (CTU), whose mandate is to protect the United States from terrorist plots. The episodes take place over the course of one hour, depicting events as they happen, in real time.',
        year: 2001,
    },
    {
        category:'TV',
        name: 'The Friends S1',
        info: 'Comedy series about a tight-knit group of friends living in Manhattan. It also covers their interactions with their families, their lovers, and various colleagues over a period of several years. The series opens with runaway bride Rachel Green, who has just abandoned her fiance Barry Farber at the altar',
        year: 1994,
    },
    {
        category:'TV',
        name: 'Walking Dead S1',
        info: 'The series features a large ensemble cast as survivors of a zombie apocalypse trying to stay alive under near-constant threat of attacks from zombies chiefly known as "walkers" by the other characters.',
        year: 2010,
    },
    {
        category:'TV',
        name: 'Breaking Bad S1',
        info: 'Set in Albuquerque, New Mexico, between 2008 and 2010, Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who transforms into a ruthless kingpin in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.',
        year: 2008,
    },
    {
        category:'TV',
        name: 'Game of Thrones S1',
        info: ' Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.',
        year: 2011,
    },
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;