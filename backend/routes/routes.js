const home = require("../src/app/home/home.controller");
const about = require("../src/app/about/about.controller");
const map = require("../src/app/map/map.controller");
const express = require("express");
const stats = require("../src/app/map/stats.controller");
const regions = require("../src/app/map/regions.controller");
const router = express.Router();

router.get("/", home);
router.get("/about", about);
router.get("/map", map);
router.get("/map/:province", regions);
router.get("/map/:province/:hrcode", stats);
module.exports = router;
