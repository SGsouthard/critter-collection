const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

const { User } = require('../models');
const { Bugs } = require('../models');
const { Fish } = require('../models');
const { Seacreatures } = require('../models');


router.get("/", (req, res) => {
    Bugs.findAll()
    .then(function (bugsList) {
        console.log('FOUND ALL bugs', bugsList);
        res.render('bugs/index', { Bugs: bugsList });
    })
    .catch(function (err) {
        console.log("ERROR", err)
        res.json({ message: "error occured, please try again"});
    });
});

//get a specific fish by it's ID
router.get('/:id', function (req, res) {
    let bugsIndex = Number(req.params.id);
    Bugs.findByPk(bugsIndex)
        .then(function (bugs) {
            if (bugs) {
                bugs = bugs.toJSON();
                res.render('bugs/show', { bugs });
            } else {
                console.log('This bug does not exist');
                res.render('404', { message: 'Bug does not exist'})
            }
        })
})

module.exports = router;