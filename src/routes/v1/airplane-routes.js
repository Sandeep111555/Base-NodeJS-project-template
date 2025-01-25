const express = require('express');
const {airplaneController} = require('../../controllers')
const {airplaneMiddlewares} = require("../../middlewares")
const router = express.Router();
console.log("inside routes/v1/airplane-routes.js");
router.post('/',airplaneMiddlewares.validateCreateRequest,airplaneController.createAirplane);
router.get('/:id',airplaneController.findAirplaneById);
router.delete('/:id',airplaneController.deleteAirplaneById);
router.get('/',airplaneController.findAllAirplanes);
router.patch('/:id',airplaneController.updateAirplane);
module.exports=router