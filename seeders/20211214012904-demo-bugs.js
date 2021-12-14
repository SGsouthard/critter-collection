'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bugs', 
    [
      {
        name: 'common_butterfly',
        price: 160,
        flickPrice: 240,
        catchPhrase: 'I caught a common butterfly! They often flutter by!',
        museumInfo: "The common butterfly would have you believe it is but a beautiful friend flitting prettily about the flowers. Bah, I say! They may seem innocent things with their pretty white wings, but they hide a dark side! The common butterfly caterpillar is called a cabbage worm, you see, and it's a most voracious pest. The ravenous beasts chew through cabbage, broccoli, kale and the like with a devastating gusto. And my feathers! Their green coloring is truly GROSS! A hoo-rrific hue, I say.",
        image: 'https://acnhapi.com/v1/images/bugs/1',
        icon: 'https://acnhapi.com/v1/icons/bugs/1',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'yellow_butterfly',
        price: 160,
        flickPrice: 240,
        catchPhrase: "I caught a yellow butterfly! Shouldn't all BUTTERflies be yellow?",
        museumInfo: 'Allow me to enlighten you... The yellow butterfly is named for its yellow wings. Need I say more? If I must, then allow me to note that the female yellow butterfly can lay up to 600 eggs at a time! Bleech! And their creepy crawly caterpillars just love to chomp on clover plants. A recipe for disaster, I say. Just imagine reaching for a four-leaf clover, only to touch a larva instead! Yuck! The worst of luck!',
        image: 'https://acnhapi.com/v1/images/bugs/2',
        icon: 'https://acnhapi.com/v1/icons/bugs/2',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'tiger_butterfly',
        price: 240,
        flickPrice: 360,
        catchPhrase: "I caught a tiger butterfly! I've earned my stripes!",
        museumInfo: "Tiger butterflies are known for their majestic wings, which many consider quite beautiful. Truth be told, I find them monstrous! Those strange striped patterns... They give this owl the goose bumps! And while you may imagine young tiger butterfly larvae to look like lovely green caterpillars...it's not so! Why, when tiger butterflies are but babes, they're covered in unsightly white, brown, and black spots. In this way, they camouflage themselves as...as...bird droppings! Putrid pests, indeed!",
        image: 'https://acnhapi.com/v1/images/bugs/3',
        icon: 'https://acnhapi.com/v1/icons/bugs/3',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'peacock_butterfly',
        price: 2500,
        flickPrice: 3750,
        catchPhrase: "I caught a peacock butterfly! Now it's my turn to strut my stuff!",
        museumInfo: 'Pretty as a peacock? Bah, I say! The wings of the peacock butterfly may have a pattern similar to that of the beautiful bird... But its forewings are also often covered in a dark, velvety hair! You heard right! HAIRY wings! A hair-raising revelation indeed!',
        image: 'https://acnhapi.com/v1/images/bugs/4',
        icon: 'https://acnhapi.com/v1/icons/bugs/4',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'common_bluebottle',
        price: 300,
        flickPrice: 450,
        catchPhrase: "I caught a common bluebottle! I'll put it in a rare green jar!",
        museumInfo: "The common bluebottle is a type of swallowtail butterfly with a bright blue line running down its wings. They fly quite nimbly, it seems, and are thus quite difficult to catch. But seeing how they've been known to slurp nutrients from MUD puddles... I simply CAN'T imagine wanting to catch one myself. What awful breath!",
        image: 'https://acnhapi.com/v1/images/bugs/5',
        icon: 'https://acnhapi.com/v1/icons/bugs/5',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'paper_kite_butterfly',
        price: 1000,
        flickPrice: 1500,
        catchPhrase: 'I caught a paper kite butterfly! Do I read it, fly it, or spreadit on toast?',
        museumInfo: "With its black-and-white-striped wing pattern, the paper kite butterfly is both elegant and pretty... PRETTY POISONOUS I MEAN! Hoo dear! Where was I? Oh yes... Even this butterfly's black-and-white-striped larva and little golden pupae are toxic to predators. Indeed, the paper kite butterfly's foul flavor is famous, and thus birds, in particular, steer clear of the fiends. THIS bird most of all!",
        image: 'https://acnhapi.com/v1/images/bugs/6',
        icon: 'https://acnhapi.com/v1/icons/bugs/6',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'great_purple_emperor',
        price: 3000,
        flickPrice: 4500,
        catchPhrase: 'I caught a great purple emperor! Its purple reign is over now!',
        museumInfo: "The great purple emperor lives high in the treetops and is renowned for its pretty purple-hued wings. Its impressive bird-like wingspan and elusive nature have made it a favorite among butterfly aficionados. But truth be told, the so-called great purple emperor has some not-so-great personal peculiarities. For one...it has two horrid HORNS upon its head when it is in its caterpillar form. For two...it has been known to dine on feces and animal carcasses! Hoo! That's why I call it the Emperor of EWWW!",
        image: 'https://acnhapi.com/v1/images/bugs/7',
        icon: 'https://acnhapi.com/v1/icons/bugs/7',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'monarch_butterfly',
        price: 140,
        flickPrice: 210,
        catchPhrase: 'I caught a monarch butterfly! Guess the butterflies are a democracy now!',
        museumInfo: "Did you know the monarch butterfly migrates south for the winter and returns north for the summer? Indeed, these horrid orange beasties do not tolerate the cold and travel 3,000 miles to escape the winter. During the journey, they cluster together in trees by the thousands just to stay warm. Imagine! Hordes of the foul flittering fiends huddled together in one place! If only they'd put on tiny coats instead.",
        image: 'https://acnhapi.com/v1/images/bugs/8',
        icon: 'https://acnhapi.com/v1/icons/bugs/8',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'emperor_butterfly',
        price: 4000,
        flickPrice: 6000,
        catchPhrase: "I caught an emperor butterfly! It's not your average monarch!",
        museumInfo: 'The emperor butterfly is called the jewel of the forest. But its vivid blue hue... Ewww, let me tell you! The color does not come from a dye, but rather from light reflecting off layers of translucent scales. Yes, butterfly wings are covered in tiny scales! SCALES! Butterfly? Bah! More like snake of the sky!',
        image: 'https://acnhapi.com/v1/images/bugs/9',
        icon: 'https://acnhapi.com/v1/icons/bugs/9',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'agrias_butterfly',
        price: 3000,
        flickPrice: 4500,
        catchPhrase: 'I caught an agrias butterfly! I wonder if it finds me disagrias-able?',
        museumInfo: 'Some say the agrias butterfly is one of the most beautiful butterflies in the world. Bah, I say! BAH! They may have brightly colored wings, but the way they flutter and flitter...SO FOUL! In fact, the agrias butterfly flies so fast, it is quite a feat to catch one. I suppose I should congratulate you on your good fortune... But catching any bug seems a misfortune to me.',
        image: 'https://acnhapi.com/v1/images/bugs/10',
        icon: 'https://acnhapi.com/v1/icons/bugs/10',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'rajah_brookes_birdwing',
        price: 2500,
        flickPrice: 3750,
        catchPhrase: "I caught a Rajah Brooke's birdwing! Nothing else I'd rajah be doing!",
        museumInfo: "Did you know that the repulsive Rajah Brooke's birdwing loves to luxuriate in hot-springs water? It's true! Hoo! The males gather in groups to sip the moisture while the females hide in jungle trees. And though they dress to impress in red and green, these fluttering fiends are not just stylish... They're also quite malicious! Their little larvae pack a poisonous punch that's supposed to protect them from predators... But I suspect more diabolical designs.",
        image: 'https://acnhapi.com/v1/images/bugs/11',
        icon: 'https://acnhapi.com/v1/icons/bugs/11',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'queen_alexandras_birdwing',
        price: 4000,
        flickPrice: 6000,
        catchPhrase: "I caught a Queen Alexandra's birdwing! That's a feather in my cap!",
        museumInfo: "Hoo! The horror! This behemoth butterfly may be called a Queen Alexandra's birdwing... But I call it the Queen of My Nightmares! It is huge! Indeed, the world's hugest. No butterfly can best its foot-long wingspan. The larvae alone grow to more than 4 inches. As if that weren't appalling enough...they're poisonous! Murderous monsters, indeed!",
        image: 'https://acnhapi.com/v1/images/bugs/12',
        icon: 'https://acnhapi.com/v1/icons/bugs/12',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'moth',
        price: 130,
        flickPrice: 195,
        catchPhrase: 'I caught a moth! And I had a ball doing it!',
        museumInfo: "Many think the moth is strictly a nocturnal creature. Alas, no! These frightful fluttering beasts have been known to haunt the daylight and twilight hours too. Thus, there is no time of day one might escape the moth trait I dislike most of all—those feathery antennae! The mere thought of them gives my feathers goosebumps. And I'm no goose.",
        image: 'https://acnhapi.com/v1/images/bugs/13',
        icon: 'https://acnhapi.com/v1/icons/bugs/13',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'atlas_moth',
        price: 3000,
        flickPrice: 4500,
        catchPhrase: 'I caught an Atlas moth! I bet it never gets lost!',
        museumInfo: 'The Atlas moth is a monstrous thing! Not only is it one of the largest moths in the world... The tips of its wings look rather like the heads of venomous snakes! Despite its largeness and loathsome looks, the adult Atlas moth lives only for a few days. It emerges from its cocoon without a mouth, you see...and so cannot eat. I feel for the poor thing...but it is still foul!',
        image: 'https://acnhapi.com/v1/images/bugs/14',
        icon: 'https://acnhapi.com/v1/icons/bugs/14',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'madagascan_sunset_moth',
        price: 2500,
        flickPrice: 3750,
        catchPhrase: "I caught a Madagascan sunset moth! Wow, you're not from around here!",
        museumInfo: "The Madagascan sunset moth is said to be the most beautiful moth in the world...a sentiment even I can't deny. While most moths are nocturnal, this one flutters about during the day, making good use of the light. That is, when the daylight reflects off its wings, a kaleidoscope of colors are revealed! Oh! Eh...too bad it has such startling red feet as a caterpillar. I might have found it almost tolerable otherwise. Almost, but not quite.",
        image: 'https://acnhapi.com/v1/images/bugs/15',
        icon: 'https://acnhapi.com/v1/icons/bugs/15',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'long_locust',
        price: 200,
        flickPrice: 300,
        catchPhrase: 'I caught a long locust! Or, as I call it, a looooocust.',
        museumInfo: "As if the average locust weren't large enough...we must suffer the long locust too! The wretched beasts are known for their unusually long hind legs as well as their elongated heads. But that is hardly the long locusts' worst trait... I tell you, they spit brown goo when they're scared!",
        image: 'https://acnhapi.com/v1/images/bugs/16',
        icon: 'https://acnhapi.com/v1/icons/bugs/16',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'migratory_locust',
        price: 600,
        flickPrice: 900,
        catchPhrase: 'I caught a migratory locust! Things just went south for this guy!',
        museumInfo: `Ah yes, the lone migratory locust. It seems like such a harmless hopper as it bounces about in the grass. But beware! When these pests band together and travel in swarms, they leave devastation in their wake! Migratory locusts have gathered by the millions throughout history, wiping out crops and causing famine. That's why I always say, "Never let a locust hang out with its friends!". That is precisely how a plague begins.`,
        image: 'https://acnhapi.com/v1/images/bugs/17',
        icon: 'https://acnhapi.com/v1/icons/bugs/17',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'rice_grasshopper',
        price: 400,
        flickPrice: 600,
        catchPhrase: "I caught a rice grasshopper! I've been looking for agluten-free alternative...",
        museumInfo: "In point of fact, rice grasshoppers are an awful pest! They devour rice plants and wipe out the crucial crop. But revenge is sweet! These bugs are edible, you see, and so some folks eat them as way to get rid of them. When boiled in soy sauce, rice grasshoppers are quite tasty, it's said. Though why anyone would put an insect in their mouth is beyond me. The mere thought gives me the gags!",
        image: 'https://acnhapi.com/v1/images/bugs/18',
        icon: 'https://acnhapi.com/v1/icons/bugs/18',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'grasshopper',
        price: 160,
        flickPrice: 240,
        catchPhrase: "I caught a grasshopper! They're a grass act!",
        museumInfo: `Grasshoppers are known for making a "chirping" sound. Though it doesn't sound like chirping to me... They make this rude racket by rubbing their hind legs against their wings. And though they eat seeds and pollen, they sometimes prey on smaller insects too. I say! Such violent table manners should not be tolerated! Horrible hoppers.`,
        image: 'https://acnhapi.com/v1/images/bugs/19',
        icon: 'https://acnhapi.com/v1/icons/bugs/19',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
      },
      {
        name: 'cricket',
        price: 130,
        flickPrice: 195,
        catchPhrase: 'I caught a cricket! What a chirp thrill!',
        museumInfo: "I say, where shall I start with the cricket? Well, to begin with, they are mostly nocturnal creatures. And for that you day-loving diurnal types should be grateful! Hoo! It means you don't have to lay eyes upon their prickly legs or overly long antennae like us night owls! Of course, crickets are best known for the chirping sound they make by rubbing their wings together. Some find the noise lovely to listen to. Alas, it only serves to remind me of another unpleasant fact... Which is to say...you will find a cricket's ears right next to its knees! I've gone weak in the knees at the mention of it!",
        image: 'https://acnhapi.com/v1/images/bugs/20',
        icon: 'https://acnhapi.com/v1/icons/bugs/20',
        capture: 'False',
        createdAt: '2021-12-14T02:09:55.869Z',
        updatedAt: '2021-12-14T02:09:55.869Z'
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
