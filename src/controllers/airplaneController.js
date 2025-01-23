const {airplaneService} = require("../services");
const {StatusCodes} = require('http-status-codes'); 
/**
 * POST
 * body: {
 * 'modelNumber':'airbus1321',
 * 'capacity':'90'
 * }
 */
async function createAirplane(req,res){
    try{
        const airplane = airplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"Successfully created an Airplane",
            data: {},
            error: {}
        })
    }
    catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Creating Airplane failed",
            data:{},
            error:{},
        })
    }
}

module.exports={
    createAirplane
}