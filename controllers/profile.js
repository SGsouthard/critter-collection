const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");
const isLoggedIn = require('../middleware/isLoggedIn');

const { User } = require('../models');
const { Bugs } = require('../models');
const { Fish } = require('../models');
const { Seacreatures } = require('../models');

//page does not work :<

let getCritters = async (userInfo) => {
    let critters = userInfo
    console.log('Before', critters)

    
    let x = await Promise.all([Bugs.findAll(), Fish.findAll(), Seacreatures.findAll()])
    .then(function ([bugsList, fishList, seacreaturesList]) {
        critters.Bugs = bugsList.map(bug => bug.dataValues);
        critters.Fish = fishList.map(fish => fish.dataValues);
        critters.Seacreatures = seacreaturesList.map(seacreature => seacreature.dataValues);
        console.log('Success')
    })
    .catch(function (err){
        critters.Bugs = []
        critters.Fish = []
        critters.seacreaturesList = []
        console.log('uh oh', err)
    })
    .finally(function(){
        console.log('Done')
        return critters;
    })
    return Promise.resolve(x);
}


router.get("/", isLoggedIn, async (req, res) => {
    const { id, name, email } = req.user.get();
    let critters = await getCritters({id, name, email});
    console.log('Critters', critters)
    res.render("profile", critters );
});


module.exports = router;