'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInster('Fishes', 
    [
      {
        name: 'bitterling',
        shadowSize: 'Smallest (1)',
        price: 900,
        cjPrice: 1350,
        catchPhrase: "I caught a bitterling! It's mad at me, but only a little.",
        museumInfo: "Bitterlings hide their eggs inside large bivalves—like clams—where the young can stay safe until grown. The bitterling isn't being sneaky. No, their young help keep the bivalve healthy by eating invading parasites! It's a wonderful bit of evolutionary deal making, don't you think? Each one keeping the other safe... Though eating parasites does not sound like a happy childhood... Is that why the fish is so bitter?",
        image: 'https://acnhapi.com/v1/images/fish/1',
        icon: 'https://acnhapi.com/v1/icons/fish/1',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'pale_chub',
        shadowSize: 'Smallest (1)',
        price: 200,
        cjPrice: 300,
        catchPhrase: 'I caught a pale chub! That name seems a bit judgy...',
        museumInfo: "The pale chub is a river fish with simple back-and-silver coloring. Interestingly, the males' coloring becomes most vibrant when he's trying to attract a mate! Though normally plain, these fellows really know how to look stylish when they want to. Perhaps I could learn a thing or two from the pale chub...",
        image: 'https://acnhapi.com/v1/images/fish/2',
        icon: 'https://acnhapi.com/v1/icons/fish/2',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'crucian_carp',
        shadowSize: 'Small (2)',
        price: 160,
        cjPrice: 240,
        catchPhrase: 'I caught a crucian carp! My skills are sharp!',
        museumInfo: `I wonder... Do you know how to tell the difference between a crucian carp and a standard-issue carp? It's quite easy to tell the two apart... One must simply locate the barbels. Or, rather, the lack of them! And just what is a barbel, you ask? Well, a barbel looks a little something like a mustache. A run-of-the-mill carp will sport this unsightly "facial hair," while a crucian carp is considerably better groomed! I tried to grow a mustache when I was younger. It never did fill in quite right... All for the best in the end, as mustaches go so much better with noses than with beaks!`,
        image: 'https://acnhapi.com/v1/images/fish/3',
        icon: 'https://acnhapi.com/v1/icons/fish/3',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'dace',
        shadowSize: 'Medium (3)',
        price: 240,
        cjPrice: 360,
        catchPhrase: 'I caught a dace! Hope I have some space!',
        museumInfo: `Dace are shiny little fish that enjoy freshwater streams with gravelly bottoms and plenty of sunlight. What a fishy paradise...until the larger fish move in and begin eating the dace! Sadly, the shiny dace are easy for other fish to spot, which makes them a popular snack. However, this particular specimen here has no need to worry. There's a strict "No Eating Your Neighbor" policy at this institution.`,
        image: 'https://acnhapi.com/v1/images/fish/4',
        icon: 'https://acnhapi.com/v1/icons/fish/4',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'carp',
        shadowSize: 'Medium (4)',
        price: 300,
        cjPrice: 450,
        catchPhrase: 'I caught a carp! If I catch another they can carpool!',
        museumInfo: 'Oh, the carp... have you ever seen their teeth? For your sake, I hope you have not! Carp have teeth in their throat strong enough to crunch on hard things like shells and fingers! A good rule of thumb when dealing with other species is to keep your fingers out of their mouths. Although, having neither thumbs nor fingers, I am quite safe from this little fellow!',
        image: 'https://acnhapi.com/v1/images/fish/5',
        icon: 'https://acnhapi.com/v1/icons/fish/5',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'koi',
        shadowSize: 'Medium (4)',
        price: 4000,
        cjPrice: 6000,
        catchPhrase: "I caught a koi! I don't know why it's so shy... or such a bad speller...",
        museumInfo: 'Koi are a variety of carp bred for their color mutations...starting more than a thousand years ago! Well, one glance at their impressive coloring tells you that the centuries of effort were worth it. And even today people still selectively breed koi in search of new color combinations! One marvels at the thought of what the koi may look like in another thousand years.',
        image: 'https://acnhapi.com/v1/images/fish/6',
        icon: 'https://acnhapi.com/v1/icons/fish/6',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'goldfish',
        shadowSize: 'Smallest (1)',
        price: 1300,
        cjPrice: 1950,
        catchPhrase: "I caught a goldfish! It's worth its weight in fish!",
        museumInfo: "Goldfish are so cute and delicate... but do you know how big they can get? Why, they can grow up to... a foot in length! Well, sometimes. The size of the tank they're kept in tends to restrict their growth. And just how big will this goldfish get in our large museum tank? I look forward to finding out!",
        image: 'https://acnhapi.com/v1/images/fish/7',
        icon: 'https://acnhapi.com/v1/icons/fish/7',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'pop-eyed_goldfish',
        shadowSize: 'Smallest (1)',
        price: 1300,
        cjPrice: 1950,
        catchPhrase: 'I got a pop-eyed goldfish! It looks so...surprised!',
        museumInfo: 'Pop-eyed goldfish have, as the name suggests, huge round eyes. But as babies they look like other goldfish! As they grow, their eyes begin to pop out and they gain their, hoo, distinct appearance... Imagine the poor fish fancier who unknowingly bought one! Their eyes might well pop out just as far!',
        image: 'https://acnhapi.com/v1/images/fish/8',
        icon: 'https://acnhapi.com/v1/icons/fish/8',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'ranchu_goldfish',
        shadowSize: 'Small (2)',
        price: 4500,
        cjPrice: 6750,
        catchPhrase: 'I caught a ranchu goldfish! But I prefer balsamicu goldfish!',
        museumInfo: 'The ranchu goldfish is a charming relative of the goldfish with a bumpy head and stout, round body. They have ordinary heads when born, but develop impressive rectangular heads after about three years. Supposedly their head shape changes depending on factors like the size of their tank... So ranchu goldfish enthusiasts aim to raise perfectly shaped specimens and work hard to achieve this. Of course, no one asks the ranchu goldfish themselves what shape they want their heads to be...',
        image: 'https://acnhapi.com/v1/images/fish/9',
        icon: 'https://acnhapi.com/v1/icons/fish/9',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'killifish',
        shadowSize: 'Smallest (1)',
        price: 300,
        cjPrice: 450,
        catchPhrase: 'I caught a killifish! The streams are safe again.',
        museumInfo: "Ah, the magnificent killifish! Did you know there are over 1,000 different species? My own favorite killifish species are the mangrove, which can live on land for weeks, breathing air! And the mummichog, the first fish ever brought to space. I wonder if the killifish you've brought me is related to either those intrepid explorers?",
        image: 'https://acnhapi.com/v1/images/fish/10',
        icon: 'https://acnhapi.com/v1/icons/fish/10',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'crawfish',
        shadowSize: 'Small (2)',
        price: 200,
        cjPrice: 300,
        catchPhrase: "I caught a crawfish! Or else it's a lobster and I'm a giant!",
        museumInfo: "Ohoo! So you have found a crawfish. Neither crab nor lobster, crawfish evolved in an interesting manner. Beware their fearsome pinchy pinchers! Behold their many legs! I say! It is a big bug-like, eh wot...The more I look at it, the more unsettled I feel... Let's be done with this and never speak of it again, shall we?",
        image: 'https://acnhapi.com/v1/images/fish/11',
        icon: 'https://acnhapi.com/v1/icons/fish/11',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'soft-shelled_turtle',
        shadowSize: 'Medium (4)',
        price: 3750,
        cjPrice: 5625,
        catchPhrase: 'I caught a soft-shelled turtle! I can really shell it out!',
        museumInfo: "These relatives of common turtles will not let go when they decide to bite down on something. Although they can be quite shy, they will become a bit aggressive when threatened. They are often found in water and are very good swimmers because of the flat shape of their shells. They swim with their snouts over the surface of the water so they can breathe. Soft-shelled turtles aren't safe to hold because they are so prone to biting at the slightest movement. However, if one bites down on you, it will usually let go when you put it safely back in the water.",
        image: 'https://acnhapi.com/v1/images/fish/12',
        icon: 'https://acnhapi.com/v1/icons/fish/12',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'snapping_turtle',
        shadowSize: 'Large (5)',
        price: 5000,
        cjPrice: 7500,
        catchPhrase: 'I caught a snapping turtle! How can it snap without fingers?',
        museumInfo: "The snapping turtle is a large turtle known for it's crocodile-like body and long claws. No, wait-- it is better known for it's ferocious bite, which it can deliver with shocking speed for a turtle. NO, WAIT-- it is BEST known for that time one chased me across a parking lot and I had to climb on top of a car.",
        image: 'https://acnhapi.com/v1/images/fish/13',
        icon: 'https://acnhapi.com/v1/icons/fish/13',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'tadpole',
        shadowSize: 'Smallest (1)',
        price: 100,
        cjPrice: 150,
        catchPhrase: "I caught a tadpole... It's just a tad small.",
        museumInfo: 'Undoubtedly you know that tadpoles eventually turn into frogs. I must say, I find them impossibly adorable with their squiggly little tails. But even cuter... when they sprout legs! Why, we can witness accelerated evolution in these squirmy little ones. Hoo, it makes me so emotional!',
        image: 'https://acnhapi.com/v1/images/fish/14',
        icon: 'https://acnhapi.com/v1/icons/fish/14',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'frog',
        shadowSize: 'Small (2)',
        price: 120,
        cjPrice: 180,
        catchPhrase: "I caught a frog! Or it's a new neighbor...and I have some apologizing to do.",
        museumInfo: "I understand that frogs converse with fellow frogs through a number of varied calls, as it were. Ribbit! My prince has arrived! Gribbit riiibbit! This pond is tragic! Ribbity rib't! I think you're splendid! Hoo hoo, of course I have no clue what they're saying, but I like to think if I practice enough, I might!",
        image: 'https://acnhapi.com/v1/images/fish/15',
        icon: 'https://acnhapi.com/v1/icons/fish/15',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'freshwater_goby',
        shadowSize: 'Small (2)',
        price: 400,
        cjPrice: 600,
        catchPhrase: 'I caught a freshwater goby! Time to go bye-bye!',
        museumInfo: 'The freshwater goby is an unassuming specimen. But beneath that calm, fish exterior, true gluttony resides! It will eat anything that will fit in its mouth...And its mouth is quite the gaping maw, so I recommend you refrain from drawing attention to yourself!',
        image: 'https://acnhapi.com/v1/images/fish/16',
        icon: 'https://acnhapi.com/v1/icons/fish/16',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'loach',
        shadowSize: 'Small (2)',
        price: 400,
        cjPrice: 600,
        catchPhrase: "I caught a loach! It's...looking at me with reproach.",
        museumInfo: "Loaches are a large group of bottom-feeding freshwater fish. Because there are so many species, it is difficult to generalize about them all. The one thing they all have in common is perhaps their most unappealing trait; the name 'loach.' Repellent, isn't it? They should have just called it the 'cockloach' and been done with it, eh wot! Loach...loach... It just tastes terrible in the beak.",
        image: 'https://acnhapi.com/v1/images/fish/17',
        icon: 'https://acnhapi.com/v1/icons/fish/17',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'catfish',
        shadowSize: 'Medium (4)',
        price: 800,
        cjPrice: 1200,
        catchPhrase: "I caught a catfish! I'm more of a dogfish person...",
        museumInfo: "Catfish don't have scales and are rather slimy. Believe it or not, this slime helps them breathe! Some species of catfish are nocturnal, and they'll feed on almost anything. They use a suctioning action to pull in their food. Did I mention they can grow as large as you or I?",
        image: 'https://acnhapi.com/v1/images/fish/18',
        icon: 'https://acnhapi.com/v1/icons/fish/18',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'giant_snakehead',
        shadowSize: 'Large (5)',
        price: 5500,
        cjPrice: 8250,
        catchPhrase: 'I caught a giant snakehead! Um...but I asked for a medium?',
        museumInfo: 'The giant snakehead is quite a sight to behold, wot! One glance conjurs up visions of its namesake. This resilient creature can even find a home in the mud, where it is able to breathe. As a matter of fact, it dislikes cold weather, so during wintertime the mud serves as its temporary home. I hear that they eat anything that swims past their head. While odd, I feel a sense of owlship with them.',
        image: 'https://acnhapi.com/v1/images/fish/19',
        icon: 'https://acnhapi.com/v1/icons/fish/19',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      },
      {
        name: 'bluegill',
        shadowSize: 'Small (2)',
        price: 180,
        cjPrice: 270,
        catchPhrase: 'I caught a bluegill! Do you think it calls me "pinklung"?',
        museumInfo: 'The bluegill is incredibly common. A bit too common, depending upon where you are. They eat anything that fits in their mouths and are highly adaptable. The bane of fishermen in some areas, bluegill is often the only fish to be caught! But looking in its wee beady eyes, I must say I see no ill will in it...',
        image: 'https://acnhapi.com/v1/images/fish/20',
        icon: 'https://acnhapi.com/v1/icons/fish/20',
        capture: 'False',
        createdAt: '2021-12-14T01:52:42.567Z',
        updatedAt: '2021-12-14T01:52:42.567Z'
      }
    ]

    )
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
