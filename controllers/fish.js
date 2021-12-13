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
        console.log('FOUND ALL FISH');
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

router.get("/edit/:id", function(req,res){
    let fishIndex = Number(req.params.id);
    Fish.findByPk(fishIndex)
    .then(function (fish){
        if (fish) {
            fish = fish.toJSON();
            res.render('fish/edit', { fish });
        } else {
            console.log('This bug is dead');
            res.render('404', {message: 'This bug does not exist'})
        }
    })
    .catch(function (err) {
        console.log("ERROR", err)
    });
});

router.put('/:id', function(req,res){
    let fishIndex = Number(req.params.id);
    Fish.update({
        capture: !req.body.capture
    }, { where: { id: fishIndex} })
    .then(function(response){
        res.redirect(`/fish/${fishIndex}`);
    })
    .catch(function(err){
        console.log('ERROR', err);
        res.render('404', {message: "Update failed, try again?"})
    })
});

module.exports = router;