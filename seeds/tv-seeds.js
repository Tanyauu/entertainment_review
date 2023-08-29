const { TV } = require('../models');

const tvData = [
    {
        tv_name: '24',
        info: ' 24 is a serial drama starring Kiefer Sutherland as central character Jack Bauer, an agent with the Counter Terrorist Unit (CTU), whose mandate is to protect the United States from terrorist plots. The episodes take place over the course of one hour, depicting events as they happen, in real time.',
    },
    {
        tv_name: 'The Friends',
        info: 'Comedy series about a tight-knit group of friends living in Manhattan. It also covers their interactions with their families, their lovers, and various colleagues over a period of several years. The series opens with runaway bride Rachel Green, who has just abandoned her fiance Barry Farber at the altar',
    },
    {
        tv_name: 'Walking Dead',
        info: 'The series features a large ensemble cast as survivors of a zombie apocalypse trying to stay alive under near-constant threat of attacks from zombies chiefly known as "walkers" by the other characters.',
    },
    {
        tv_name: 'Breaking Bad',
        info: 'Set in Albuquerque, New Mexico, between 2008 and 2010, Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who transforms into a ruthless kingpin in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.',
    },
    {
        tv_name: 'Game of Thrones',
        info: ' Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.',
    },
];

const seedTVs = () => TV.bulkCreate(tvData);

module.exports = seedTVs;