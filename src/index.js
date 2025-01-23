const express = require('express');
const {ServerConfig,Logger} = require('./config');
const apiRoutes = require('./routes');
const logger = require('./config/logger-config');
app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//use routes instead of direct app.get
try{
    app.use('/api',apiRoutes);
} catch(error){
    logger.error("error",error);
}
app.listen(ServerConfig.PORT,()=>{
    console.log(`Successfully listening on PORT: ${ServerConfig.PORT}`);
    Logger.info(`Successfully listening on PORT: ${ServerConfig.PORT}`);
})