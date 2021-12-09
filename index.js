const axios = require('axios');
const fs = require('fs');
// const { json } = require('sequelize/types');
const Fish = require('./models');
const Fishavailability = require('./models');
const Bugs = require('./models');
const Bugsavailability = require('./models');
const Seacreatures = require('./models');
const Seacreatureavailability = require('./models');


// fs.readFile('fish.json', 'utf8', function (err, data) {
//     if (err) {
//         console.log('there was a problem reading the file', err)
//     } else {
//         let splitBySpaceArray = data.split('\n');
//         let splitByBracketArray = data.split('{');
//         let splitByIDArray = data.split('"id"');
        
//         console.log(splitByIDArray);
//     }
// });

Fish.create({
    name: {
        
    }
})
