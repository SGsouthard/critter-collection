const axios = require('axios');
const { text } = require('express');
const fs = require('fs');
const { stringify } = require('querystring');
const { User, Bugs, Fish, Seacreatures, ProfileFun } = require('./models');
let fishData = [];

////Populate the fish using the fish.json file
// fs.readFile('fish.json', 'utf8', function (err, data) {
//     if (err) {
//         console.log('there was a problem reading the file', err)
//     } else {
//         let fishData = JSON.parse(data);
//         // console.log(fishData[1]);
//         //put loop/fish.create in here to populate the dang thing
//         let emptyArray = [];
//         for (i = 0; i < fishData.length; i++) {
//             let fish = fishData[i]
//             const obj = {
//                 name: fish['file-name'],
//                 shadowSize: fish['shadow'],
//                 price: fish['price'],
//                 cjPrice: fish['price-cj'],
//                 catchPhrase: fish['catch-phrase'],
//                 museumInfo: fish['museum-phrase'],
//                 image: fish['image_uri'],
//                 icon: fish['icon_uri'],
//                 capture: 'False',
//                 createdAt: new Date(),
//                 updatedAt: new Date(),
//             }
//             // Fish.create(obj)
//             // .then(function(newFish){
//             //     console.log('FISH UPLOAD', newFish.name)
//             // })
//             // .catch(function(error){
//             //     console.log('ERROR', error)
//             // });
//             emptyArray.push(obj);
//         }
//         console.log(emptyArray.slice(0, 20));
//         fs.writeFile('database.txt', emptyArray.toString(), function (err) {
//             console.log('finish');
//         })
//     }
// });

////Populate the bugs using the bugs.json file
// fs.readFile('bugs.json', 'utf8', function (err, data) {
//     if (err) {
//         console.log('there was a problem reading the file', err)
//     } else {
//         let bugsData = JSON.parse(data);
//         // console.log(bugsData[1]);
//         //put loop/bugs.create in here to populate the dang thing
//         let emptyArray = [];
//         for (i = 0; i < bugsData.length; i++) {
//             let bugs = bugsData[i]
//             const obj = {
//                 name: bugs['file-name'],
//                 price: bugs['price'],
//                 flickPrice: bugs['price-flick'],
//                 catchPhrase: bugs['catch-phrase'],
//                 museumInfo: bugs['museum-phrase'],
//                 image: bugs['image_uri'],
//                 icon: bugs['icon_uri'],
//                 capture: 'False',
//                 createdAt: new Date(),
//                 updatedAt: new Date(),
//             }
//             // Bugs.create(obj)
//             // .then(function(newBugs){
//             //     console.log('BUGS UPLOAD', newBugs.name)
//             // })
//             // .catch(function(error){
//             //     console.log('ERROR', error)
//             // });
//             emptyArray.push(obj);
//         }
//         console.log(emptyArray.slice(0, 20));
//         fs.writeFile('database.txt', emptyArray.toString(), function (err) {
//             console.log('finish');
//         })
//     }
// });

////Populate the seacreatures using the seacreatures.json file
// fs.readFile('seacreatures.json', 'utf8', function (err, data) {
//     if (err) {
//         console.log('there was a problem reading the file', err)
//     } else {
//         let seacreaturesData = JSON.parse(data);
//         // console.log(seacreaturesData[1]);
//         //put loop/seacreatures.create in here to populate the dang thing
//         for (i = 0; i < seacreaturesData.length; i++) {
//             let seacreatures = seacreaturesData[i]
//             const obj = {
//                 name: seacreatures['file-name'],
//                 price: seacreatures['price'],
//                 catchPhrase: seacreatures['catch-phrase'],
//                 museumInfo: seacreatures['museum-phrase'],
//                 image: seacreatures['image_uri'],
//                 icon: seacreatures['icon_uri'],
//                 capture: 'False'
//             }
//             Seacreatures.create(obj)
//             .then(function(newSeaCreatures){
//                 console.log('SEACREATURES UPLOAD', newSeaCreatures.name)
//             })
//             .catch(function(error){
//                 console.log('ERROR', error)
//             });
//         }
//     }
// });