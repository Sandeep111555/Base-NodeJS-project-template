const express = require('express');
router = express.Router();
const {infoController,airplaneController} = require('../../controllers')
router.use('/airplane',airplaneController.createAirplane);
router.use('/status',infoController);
module.exports=router;