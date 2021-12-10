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
        console.log('FOUND ALL SEA CREATURES', seacreaturesList);
        res.render('seacreatures/index', { Seacreatures: seacreaturesList });
    })
    .catch(function (err) {
        console.log("ERROR", err)
        res.json({ message: "error occured, please try again"});
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


module.exports = router;