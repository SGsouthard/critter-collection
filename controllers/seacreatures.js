const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

const { User } = require('../models');
const { Bugs } = require('../models');
const { Fish } = require('../models');
const { Seacreatures } = require('../models');

router.get("/seacreatures", (req, res) => {
    res.render("seacreatures/seacreatures");
});

module.exports = router;