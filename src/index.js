const express = require('express');
const {ServerConfig} = require('./config');
const apiRoutes = require('./routes');
const logger = require('./config/logger-config');
app = express();
app.use(express.json()); //to make express understand that the incoming payload is a json object
app.use(express.urlencoded({extended:true}));
//use routes instead of direct app.get
console.log("inside index.js");
app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT,async()=>{
    console.log(`Successfully listening on PORT: ${ServerConfig.PORT}`);
})