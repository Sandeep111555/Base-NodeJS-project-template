const express = require('express');
router = express.Router();
const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');
const flightRoutes = require('./flight-routes');
console.log("inside routes/v1/index.js");
router.use('/airplanes',airplaneRoutes);
router.use('/cities',cityRoutes);
router.use('/airports',airportRoutes);
router.use('/flights',flightRoutes);
module.exports=router;