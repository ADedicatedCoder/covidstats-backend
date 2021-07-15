// Import endpoint response functions from files
const home = require("../src/app/home/home.controller");
const about = require("../src/app/about/about.controller");
const map = require("../src/app/map/map.controller");
const stats = require("../src/app/map/stats.controller");
const regions = require("../src/app/map/regions.controller");

// Import Express and initialize Router
const express = require("express");
const router = express.Router();

// Assign endpoints to corresponding endpoint functions
router.get("/", home);
router.get("/about", about);
router.get("/map", map);
// router.get("/map/:province", regions);
router.get("/map/:country", stats);

// Export the router
module.exports = router;
