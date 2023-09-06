const { Review } = require('../models');

const reviewData = [
    {
        text: "Action Packed Thriller!",
        item_id: 11,
        rating: 5,
        user_id: 3,
    },
    {
        text: "Neat game with a creepy atmosphere. The game is solid and the sounds and music are top notch",
        item_id: 2,
        rating: 4,
        user_id: 3,
    },
    {
        text: "The best movie ever, it's a GREAT movie! Marlon Brando gives a great performance as Don Vito Corleone, so does Al Pacino and Robert Duvall, it is the best drama in history",
        item_id: 6,
        rating: 5,
        user_id: 2,
    },
    {
        text: "Breaking Bad was an amazing show. Once you start watching Breaking Bad from Season 1, it will feel a bit slow but gradually as the story progresses, it becomes strongly addictive and gets very interesting.",
        item_id: 14,
        rating: 3,
        user_id: 1,
    },
    {
        text: "THE GREATEST COMEDY SITCOMS OF ALL TIME!!!",
        item_id: 12,
        rating: 5,
        user_id: 2,
    },
    {
        text: "Long story short, 12/10 game of the decade. You should play this game.",
        item_id: 4,
        rating: 5,
        user_id: 2,
    },
    {
        text: "A bit overrated honestly. The swinging is fun but it feels more restrictive compared to Spider-Man 2 and the open world feels lifeless. You can't hang onto one thread swinging around as the game will launch you off automatically or swing onto a helicopter out to the statue of liberty which was one of the best things to do in that game.",
        item_id: 5,
        rating: 2,
        user_id: 3,
    },
    {
        text: "This is OK, kind of repeated concept in every season and boring",
        item_id: 13,
        rating: 3,
        user_id: 1,
    },
    {
        text: "I wish I could give 0 stars",
        item_id: 15,
        rating: 1,
        user_id: 2,
    },
    {
        text: "It’s not hard to get lost in the deep, subterranean world of Hollow Knight – and I mean that in more ways than one. ",
        item_id: 1,
        rating: 5,
        user_id: 2,
    },
    {
        text: "Grand Theft Auto V has an average Metacritic score of 97% across all platforms it's been released on, and is currently the third best selling game of all time, right behind Tetris and Minecraft.",
        item_id: 3,
        rating: 4,
        user_id: 1,
    },
    {
        text: "The Shawshank Redemption is a cinematic gem that transcends the boundaries of time and genre, leaving an indelible mark on the hearts of its viewers.",
        item_id: 7,
        rating: 5,
        user_id: 1,
    },
    {
        text: "Movies are just not made like this anymore. The scenes are prolonged with smart acting, genius scripting",
        item_id: 8,
        rating: 4,
        user_id: 3,
    },
    {
        text: "To me, this is not only Kubrick's best film but also a milestone of the genre. It is quite long at around two and a quarter hours, and it is slow, that I agree with. But it is never boring, well not to me it isn't.",
        item_id: 9,
        rating: 5,
        user_id: 2,
    },
    {
        text: "Greatest classic mystery film",
        item_id: 10,
        rating: 5,
        user_id: 1,
    },
    {
        text: "Really fun game with an amazing open world. The open world mechanics are probably some of the best I’ve ever seen.",
        item_id: 16,
        rating: 4,
        user_id: 2,
    },
    {
        text: "The story was well enough told. There were confusing parts when explaining certain characters and creators.",
        item_id: 17,
        rating: 3,
        user_id: 3,
    },
    {
        text: "Charming and Extraordinary As with previous Potter films, this one is wonderful. The mischievous trio are back in their third year at Hogwarts.",
        item_id: 17,
        rating: 5,
        user_id: 1,
    },
    {
        text: "How refreshing it is, then, to find that the just-concluded fourth season returns to the brilliant heights of its first.",
        item_id: 18,
        rating: 5,
        user_id: 2,
    },
    {
        text: "Okay this game could be great but right now for me it just alright.",
        item_id: 19,
        rating: 2,
        user_id: 1,
    },
    {
        text: "Fallout 4 is an amazing game. Featuring the most complex character creation system in gaming history",
        item_id: 19,
        rating: 5,
        user_id: 2,
    },
    {
        text: "Broken beyond all repair.",
        item_id: 19,
        rating: 1,
        user_id: 3,
    },
    {
        text: "the Fellowship of the Rings opened the door to a whole new world for me.",
        item_id: 20,
        rating: 5,
        user_id: 1,
    },
    {
        text: "I'd been having some difficulties in my life and discovered this amazing show on Netflix that helped me escape from the real world.",
        item_id: 21,
        rating: 5,
        user_id: 2,
    },
    {
        text: "This game is just plain fun. I have played over 40 hours so far and beyond an early bug where I couldn't finish a main storyline quest, it has been very smooth playing and very well done.",
        item_id: 22,
        rating: 4,
        user_id: 2,
    },
    {
        text: "They definitely needed at least 6-12 more months to actually finish the game and make it closer to what this could have been.",
        item_id: 22,
        rating: 2,
        user_id: 3,
    },
    {
        text: "The city is lifeless",
        item_id: 22,
        rating: 1,
        user_id: 1,
    },
    {
        text: "This movie really explores batman in a very different way. ",
        item_id: 23,
        rating: 5,
        user_id: 1,
    },
    {
        text: "From the first scene itself, it is made clear the amount of thought, work and creativity that has gone into the making of this movie.",
        item_id: 23,
        rating: 5,
        user_id: 2,
    },
    {
        text: "I am confused by entire ending.",
        item_id: 23,
        rating: 3,
        user_id: 3,
    },
    {
        text: " When you look beyond the surface, it's also a great character study.",
        item_id: 24,
        rating: 5,
        user_id: 1,
    },
    {
        text: "There is so much that the first season of True Detective gets right",
        item_id: 24,
        rating: 4,
        user_id: 2,
    },
    {
        text: "It is compulsively watchable while providing a comfortable sense of the familiar and total immediacy.",
        item_id: 24,
        rating: 5,
        user_id: 3,
    },
    {
        text: "It is compulsively watchable while providing a comfortable sense of the familiar and total immediacy.",
        item_id: 24,
        rating: 4,
        user_id: 4,
    },
    {
        text: "I found a newspaper a made a hat with it, 10/10 game,",
        item_id: 25,
        rating: 4,
        user_id: 3,
    },
    {
        text: "Here's a film that is offensive only in how inoffensive it proves to be.",
        item_id: 26,
        rating: 2,
        user_id: 1,
    },
    {
        text: "This series tackles all of the hard aspects of war, and doesn’t romanticize it. ",
        item_id: 27,
        rating: 5,
        user_id: 2,
    },
    {
        text: "Unending amount of game play if you pick a short span server.",
        item_id: 28,
        rating: 4,
        user_id: 2,
    },
    {
        text: "Game hella raciest so it gets a 10/10",
        item_id: 28,
        rating: 5,
        user_id: 1,
    },
    {
        text: "Nostalgia!",
        item_id: 29,
        rating: 5,
        user_id: 3,
    },
    {
        text: "It is a well written tv show ",
        item_id: 30,
        rating: 5,
        user_id: 2,
    },
    {
        text: "Absolute tops.",
        item_id: 30,
        rating: 4,
        user_id: 3,
    },
    {
        text: "best tv series",
        item_id: 31,
        rating: 5,
        user_id: 3,
    },
    {
        text: "Omg, I’ve never been glued to my seat watching such a well made series,",
        item_id: 31,
        rating: 3,
        user_id: 2,
    },
    {
        text: "It’s been about 2 days since I finished this show and it has genuinely not left my mind ever since",
        item_id: 31,
        rating: 3,
        user_id: 3,
    },
    {
        text: "Korean content continues to set the standards, this time with a riveting, deliciously dark thriller series on Netflix called Squid Game.",
        item_id: 31,
        rating: 4,
        user_id: 4,
    },
    {
        text: "overall i think it is a brilliant show , the pacing is great ",
        item_id: 31,
        rating: 5,
        user_id: 1,
    },
    {
        text: "Is one of the best Classic Sci-Fi Action Film ever.",
        item_id: 32,
        rating: 5,
        user_id: 3,
    },
    {
        text: "I watched this movie for the first time last night. I quite enjoyed it, but it was strange.",
        item_id: 32,
        rating: 4,
        user_id: 4,
    },
    {
        text: "The movie was interesting, not amazing but ok",
        item_id: 32,
        rating: 3,
        user_id: 2,
    },
    {
        text: "I highly recommend it. The plot is mind blowing",
        item_id: 32,
        rating: 5,
        user_id: 1,
    },
    {
        text: "This game is ICONIC",
        item_id: 33,
        rating: 5,
        user_id: 2,
    },
    {
        text: "One of the first side-scrollers/platformers I've ever played. It's hard to believe that a game from 1985 is the second best-selling video game ever.",
        item_id: 33,
        rating: 5,
        user_id: 3,
    },
    {
        text: "This was a breathtaking dramatisation of  the horrors and chaos following a nuclear power plant disaster",
        item_id: 34,
        rating: 5,
        user_id: 1,
    },
    {
        text: "This show is realistic in everything. People, scientists, town of Prypiat, the atmosphere...",
        item_id: 34,
        rating: 4,
        user_id: 2,
    },
    {
        text: "Revitting revitting",
        item_id: 34,
        rating: 5,
        user_id: 4,
    },
    {
        text: "Amazing film. Deeper than just a car chase. ",
        item_id: 35,
        rating: 5,
        user_id: 4,
    },
    {
        text: "A fantastic thrill ride adventure drama! ",
        item_id: 35,
        rating: 4,
        user_id: 2,
    },
    {
        text: "The most jaw-dropping action film ever made? The practicality of all the action scenes makes me laugh in awe",
        item_id: 35,
        rating: 5,
        user_id: 3,
    },
    {
        text: "Speedy, challenging gameplay",
        item_id: 36,
        rating: 4,
        user_id: 3,
    },
    {
        text: "If No Hard Feelings works, though, it’s largely because of the chemistry between the duo. Chemistry is on point",
        item_id: 37,
        rating: 4,
        user_id: 2,
    },
    {
        text: "Operation Fortune was fantastic, I had the best time. Ignore the critics: turned out way better than rotten tomato's low reviews.",
        item_id: 38,
        rating: 4,
        user_id: 1,
    },

    {
        text: "Back for their fourth, Statham and Ritchie clearly work well together, and helped bring to life the character. The set and costumes are just beautiful and eye poping colours. Entirely captivating",
        item_id: 38,
        rating: 5,
        user_id: 3,
    },

    {
        text: " give this “finale” 4.5 stars actually and for only 1 reason and his name is Harrison Ford.  How anyone does his own stunt at 80?",
        item_id: 39,
        rating: 4,
        user_id: 1,
    },

    {
        text: "I noticed that it wasn't directed by Spielberg and that it was different from within the franchise. I saw a different side of Indiana Jones",
        item_id: 39,
        rating: 5,
        user_id: 4,
    },
    {
        text: "It wastes no time with the fast cars and goes straight into the story. The chase sequences are impeccably choreographed, filled with jaw-dropping moments that will leave you on the edge of your seat. A truely immersive experience",
        item_id: 40,
        rating: 5,
        user_id: 2,
    },

    {
        text: "The first several movies are great and you can re-watch them randomly from time to time. But the further in we get the less its about the cars and what made the series great. I don't know anyone who said anything good about the movie",
        item_id: 40,
        rating: 4,
        user_id: 1,
    },

    {
        text: "Worst out of all the films to be honest. It brings the action, cars and who could forget feelings. But this seemed way too much if you ask me. ",
        item_id: 40,
        rating: 3,
        user_id: 4,
    },

    {
        text: "Unexpectedly captivating.  magical fairy tale of wonder, mythology. Totally took my breathe away",
        item_id: 41,
        rating: 5,
        user_id: 1,
    },

    {
        text: "It is indeed a fantasy fable and so much more. It was heartwarming and touchy",
        item_id: 41,
        rating: 4,
        user_id: 2,
    },

    {
        text: "I admit it was not really a masterpiece. A nonstop visual action and drama. Good run for your money.",
        item_id: 42,
        rating: 4,
        user_id: 1,
    },

    {
        text: "It was an absolute delight. Bursting with energy, heart, and a dazzling display of superhero prowess, this film delivers a fantastic cinematic experience",
        item_id: 43,
        rating: 4,
        user_id: 3,
    },

    {
        text: "It offered jaw-dropping action sequences, mind-bending time travel. I absolutely loved it",
        item_id: 43,
        rating: 4,
        user_id: 1,
    },

    {
        text: "Seeing this has brightened up my day and made me laugh a little too! How delightful. The characters, visuals are all perfect",
        item_id: 44,
        rating: 5,
        user_id: 1,
    },

    {
        text: "Emotional, visceral and as big as films get!Go see it and experience something you have never seen before especially on the big screen",
        item_id: 45,
        rating: 4,
        user_id: 1,
    },

    {
        text: "Am relieved and happy to say that Avatar The Way of Water is worth the years of wait!I can remember seeing the first film all the way back in 2009, and I was honestly blown away ",
        item_id: 45,
        rating: 5,
        user_id: 3,
    },

    {
        text: " Craft beautifully though MCU wasn't so memorable. Shang-Chi has a massive soulfulness",
        item_id: 46,
        rating: 4,
        user_id: 2,
    },

    {
        text: "It has all the hallmarks of a Marvel superhero film: a clear plot, comedy, relatable characters, and lots of CGI - but has the distinctive stamp of Hongkong action films and the martial arts fighting,",
        item_id: 46,
        rating: 4,
        user_id: 1,
    },
    {
        text: " All the actors and especially Simu Liu have undergone extensive martial arts training and it shows. The bus scene and the one on the bamboo in Macau reallyvstood out!",
        item_id: 46,
        rating: 5,
        user_id: 1,
    },

    {
        text: "The movie was very predictable and made it. Is just a pass for me.",
        item_id: 47,
        rating: 3,
        user_id: 1,
    },
    {
        text: "The reviews were quite misleading. The show was one star, acting went downhill pretty fast",
        item_id: 47,
        rating: 3,
        user_id: 1,
    },
    {
        text: "The story and world that gave birth to fantasy and Sci-Fi as we know it, as a main influence and many more for years to come. It was my first introduction to the sci-fi of what was imagined and now is possible",
        item_id: 48,
        rating: 5,
        user_id: 1,
    },
    {
        text: "As someone coming from the book to the movie, I can in good conscience add to the roar of praise for how well the film was able to capture the essence of the book without losing its way wading through ",
        item_id: 48,
        rating: 4,
        user_id: 1,
    },
    {
        text: "I had to shut it off in the violent scene,As a woman with domestic violence in my past.I had a very real sudden disturbed attack. I was disappointed. I hadn't seen Crowe on the screen for so long.It showed what a mess we'd all become. Please be kind to each other",
        item_id: 49,
        rating: 3,
        user_id: 4,
    },
    {
        text: "One of the most thought provoking movie.It was entertaining with some twists",
        item_id: 50,
        rating: 5,
        user_id: 3,
    },
    {
        text: " I don't know how anyone views this and doesn't experience horror. it is expertly filmed and edited. I watched it again last night ",
        item_id: 51,
        rating: 4,
        user_id: 1,
    },
    {
        text: "There are very few movies where if it's plot is complex, difficult to follow and understand but still we get glued in. Genuine complex with excitement",
        item_id: 52,
        rating: 5,
        user_id: 2,
    },

    {
        text: "Most amazing one-shot movie ever. ",
        item_id: 53,
        rating: 4,
        user_id: 1,
    },

    {
        text: "Tenet is certainly an extremely ambitious project even for a director, who will use any means necessary to achieve his vision. It really shows the CG and the complexity",
        item_id: 52,
        rating: 5,
        user_id: 3,
    },

    {
        text: "All are exactly on point and combine to create both a musical and visual feast. The performers offer so many standout performances. ",
        item_id: 54,
        rating: 5,
        user_id: 1,
    },

    {
        text: "Couldn't have arrived at a better moment. This show does something incredible. Through its multi-racial casting, it makes the founding of our country relatable to everybody in the country,",
        item_id: 54,
        rating: 5,
        user_id: 2,
    },

    {
        text: "Engaging and believable. I loved how the storytelling keeps twists and turns. Very enjoyable to watch",
        item_id: 55,
        rating: 4,
        user_id: 3,
    },

    {
        text: "Run has great storytelling and intense drama. Best acting...Run is not the complex mind bending psychological thriller, it was a bit on the  conventional side.",
        item_id: 55,
        rating: 4,
        user_id: 4,
    },

    {
        text: "This beautiful heartwarming, and emotive film.This film is not a biography. Story ofn how he inspired someone to get his life back on track",
        item_id: 56,
        rating: 4,
        user_id: 1,
    },

    {
        text: "Excellent independent horror films and we've had a great run this year.",
        item_id: 57,
        rating: 5,
        user_id: 2,
    },

    {
        text: "Simple stories and documentary style horror films. Very relatable and jumpscares are great! Very well paced.",
        item_id: 57,
        rating: 4,
        user_id: 4,
    },

    {
        text: "This movie might just be my favorite movie of all time. The use of the reality as material for comedy and improv. Very relatable and conveyed some great messages.",
        item_id: 58,
        rating: 5,
        user_id: 1,
    },
    {
        text: "Highly recommended! Cannot wait for Season 2!",
        item_id: 59,
        rating: 5,
        user_id: 1,
    },
    {
        text: "Easily the best debut film I've ever seen. A simple but powerful story with an immersive experience. Beautiful visuals, sounds and inteligently done. Best film by Clark",
        item_id: 60,
        rating: 5,
        user_id: 1,
    },
    {
        text: "I have watched many, many coming-of-age stories and I must say this is the best acting yet. ",
        item_id: 61,
        rating: 5,
        user_id: 2,
    },
    {
        text: "The chemistry couldn't be missed, refreshing and livel. The cinematography did great. Artistic and atmospheric.",
        item_id: 62,
        rating: 5,
        user_id: 1,
    },
    {
        text: "Very well thought out and had executed  details excellently.",
        item_id: 62,
        rating: 4,
        user_id: 3,
    },
    {
        text: "Essentially a non-stop odyssey of a man desperately trying to save himself as his personal and professional lives collapse around him.  In its rough-edged style and frenetic pacing, it’s not unlike their previous film",
        item_id: 63,
        rating: 3,
        user_id: 2,
    },
    {
        text: "I love it! It shows me scenery from a country I’ve never visited but would love to one day. It’s full of drama with some romance and gives an insight into the work and type of situations that Flying Doctors deal with.",
        item_id: 64,
        rating: 5,
        user_id: 4,
    },


];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;