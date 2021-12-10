const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

const { User } = require('../models');
const { Bugs } = require('../models');
const { Fish } = require('../models');
const { Seacreatures } = require('../models');

router.get("/", (req, res) => {
    Fish.findAll()
    .then(function (fishList) {
        console.log('FOUND ALL FISH', fishList);
        res.render('fish/index', { Fish: fishList });
    })
    .catch(function (err) {
        console.log("ERROR", err)
        res.json({ message: "error occured, please try again"});
    });
});

//get a specific fish by it's ID
router.get('/:id', function (req, res) {
    let fishIndex = Number(req.params.id);
    Fish.findByPk(fishIndex)
        .then(function (fish) {
            if (fish) {
                fish = fish.toJSON();
                res.render('fish/show', { fish });
            } else {
                console.log('This fish does not exist');
                res.render('404', { message: 'Fish does not exist'})
            }
        })
})

module.exports = router;