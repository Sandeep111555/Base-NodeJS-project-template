const express = require('express');
const {airplaneController} = require('../../controllers')
const router = express.Router;

router.post('/airplanes',airplaneController.createAirplane);
module.exports=router;