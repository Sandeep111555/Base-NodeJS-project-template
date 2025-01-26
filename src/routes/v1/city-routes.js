const express = require('express');
const {cityController} = require('../../controllers')
const {cityMiddleWares} = require('../../middlewares');
const router = express.Router();
router.post('/',cityMiddleWares.validateCreateRequest,cityController.createCity);
router.get('/',cityController.findAllCities);
router.get('/:id',cityController.findCitybyId);
router.delete('/:id',cityController.deleteCity);
module.exports = router;