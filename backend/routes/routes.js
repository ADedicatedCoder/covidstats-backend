const home = require("../src/app/home/home.controller");
const about = require("../src/app/about/about.controller");
const map = require("../src/app/map/map.controller");
const express = require("express");
const router = express.Router();

router.get("/", home);
router.get("/about", about);
router.get("/map", map);

module.exports = router;
