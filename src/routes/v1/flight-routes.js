const express = require('express');
const {flightController} = require('../../controllers')
const {flightMiddleWares} = require('../../middlewares');
const router = express.Router();
router.post('/',flightMiddleWares.validateCreateRequest,flightController.createFlight);
router.get('/',flightController.getAllFlights);
module.exports = router;