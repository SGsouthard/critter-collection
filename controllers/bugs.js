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
        console.log('FOUND ALL bugs');
        res.render('bugs/index', { Bugs: bugsList });
    })
    .catch(function (err) {
        console.log("ERROR", err)
        res.json({ message: "error occured, please try again"});
    });
});

router.get("/edit/:id", function(req,res){
    let bugsIndex = Number(req.params.id);
    Bugs.findByPk(bugsIndex)
    .then(function (bugs){
        if (bugs) {
            bugs = bugs.toJSON();
            res.render('bugs/edit', { bugs });
        } else {
            console.log('This bug is dead');
            res.render('404', {message: 'This bug does not exist'})
        }
    })
    .catch(function (err) {
        console.log("ERROR", err)
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
});

//edit the database to change value of Caught to True
router.put('/:id', function(req,res){
    let bugsIndex = Number(req.params.id);
    Bugs.update({
        capture: !req.body.capture
    }, { where: { id: bugsIndex} })
    .then(function(response){
        res.redirect(`/bugs/${bugsIndex}`);
    })
    .catch(function(err){
        console.log('ERROR', err);
        res.render('404', {message: "Update failed, try again?"})
    })
});

//Delete Route
router.delete('/:id', function(req,res){
    console.log("ID HERE", req.params.id);
    let bugsIndex = Number(req.params.id);
    Bugs.destroy({ where: { id: bugsIndex } 
    })
    .then(function(response){
        console.log('BUG DELETED', response);
        res.redirect('/bugs');
    })
    .catch(function(error){
        console.log('ERROR', error);
        res.render('404', {message: "bug was not deleted, try again"});
    })
});


module.exports = router;