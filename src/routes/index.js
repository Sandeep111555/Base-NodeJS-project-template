const express = require('express');
const v1Router = require('./v1')
router = express.Router();
console.log("inside routes/index.js");
router.use('/v1',v1Router);
module.exports=router;