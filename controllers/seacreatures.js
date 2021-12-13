const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

const { User } = require('../models');
const { Bugs } = require('../models');
const { Fish } = require('../models');
const { Seacreatures } = require('../models');

router.get("/", (req, res) => {
    Seacreatures.findAll()
    .then(function (seacreaturesList) {
        console.log('FOUND ALL SEA CREATURES');
        res.render('seacreatures/index', { Seacreatures: seacreaturesList });
    })
    .catch(function (err) {
        console.log("ERROR", err)
        res.json({ message: "error occured, please try again"});
    });
});

router.get("/edit/:id", function(req,res){
    let seacreaturesIndex = Number(req.params.id);
    Seacreatures.findByPk(seacreaturesIndex)
    .then(function (seacreatures){
        if (seacreatures) {
            seacreatures = seacreatures.toJSON();
            res.render('seacreatures/edit', { seacreatures });
        } else {
            console.log('This bug is dead');
            res.render('404', {message: 'This bug does not exist'})
        }
    })
    .catch(function (err) {
        console.log("ERROR", err)
    });
});

router.get('/:id', function (req, res) {
    let seacreaturesIndex = Number(req.params.id);
    Seacreatures.findByPk(seacreaturesIndex)
        .then(function (seacreatures) {
            if (seacreatures) {
                seacreatures = seacreatures.toJSON();
                res.render('seacreatures/show', { seacreatures });
            } else {
                console.log('This seacreatures does not exist');
                res.render('404', { message: 'Seacreatures does not exist'})
            }
        })
})

router.put('/:id', function(req,res){
    let seacreaturesIndex = Number(req.params.id);
    Seacreatures.update({
        capture: !req.body.capture
    }, { where: { id: seacreaturesIndex} })
    .then(function(response){
        res.redirect(`/seacreatures/${seacreaturesIndex}`);
    })
    .catch(function(err){
        console.log('ERROR', err);
        res.render('404', {message: "Update failed, try again?"})
    })
});


module.exports = router;