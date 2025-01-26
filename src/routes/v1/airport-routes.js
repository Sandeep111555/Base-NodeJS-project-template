const express = require('express');
const {airportMiddleWares} = require('../../middlewares');
const {airportController} = require('../../controllers');
const router = express.Router();
router.post('/',airportMiddleWares.validateCreateRequest,airportController.createAirport);
router.get('/',airportController.findAllAirports);
router.get('/:id',airportController.findAirportById);
router.delete('/:id',airportController.deleteAirport);
module.exports = router;