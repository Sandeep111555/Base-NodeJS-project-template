const express = require('express');
const {ServerConfig,Logger} = require('./config');
const apiRoutes = require('./routes');
app = express();
//use routes instead of direct app.get
app.use('/api',apiRoutes)
app.listen(ServerConfig.PORT,()=>{
    console.log(`Successfully listening on PORT: ${ServerConfig.PORT}`);
    Logger.info(`Successfully listening on PORT: ${ServerConfig.PORT}`);
})