const express = require('express');
router = express.Router();
const {infoController} = require('../../controllers')
router.use('/status',infoController);
module.exports=router;