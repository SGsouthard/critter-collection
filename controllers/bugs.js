const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

const { User } = require('../models');
const { Bugs } = require('../models');
const { Fish } = require('../models');
const { Seacreatures } = require('../models');

router.get("/bugs", (req, res) => {
    res.render("bugs/bugs");
});

module.exports = router;