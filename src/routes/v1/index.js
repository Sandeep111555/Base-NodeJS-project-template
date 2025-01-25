const express = require('express');
router = express.Router();
const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require('./city-routes');
console.log("inside routes/v1/index.js");
router.use('/airplanes',airplaneRoutes);
router.use('/cities',cityRoutes);
module.exports=router;