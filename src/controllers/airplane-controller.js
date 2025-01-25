const {airplaneService} = require("../services");
const {StatusCodes} = require('http-status-codes');
const {SuccessResponse,ErrorResponse} = require('../utils/common');
/**
 * POST
 * body: {
 * 'modelNumber':'airbus1321',
 * 'capacity':'90'
 * }
 */
async function createAirplane(req,res){
    try{
        console.log("inside createAirplane");
        const airplane = await airplaneService.createAirplane(req.body);
        SuccessResponse.data=airplane
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}
/**
 * GET
 * body:{}
 * }
 */
async function findAllAirplanes(req,res){
    try{
        console.log("inside findAllAirplanes");
        const airplane = await airplaneService.findAllAirplanes();
        SuccessResponse.data=airplane
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}
/**
 * GET by id
 * body:{}
 * 
 */
async function findAirplaneById(req,res){
    try{
        console.log("inside findAirplaneById");
        const airplane = await airplaneService.findAirplaneById(
            req.params.id
        );
        SuccessResponse.data=airplane
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}
/**
 * DELETE by id
 * body:{}
 * 
 */
async function deleteAirplaneById(req,res){
    try{
        console.log("inside deleteAirplaneById",req.params.id);
        const airplane = await airplaneService.deleteAirplane(
            req.params.id
        );
        SuccessResponse.data=airplane
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}
/**
 * POST /id
 * body: {
 *  modelNumber: ""
 * }
 */
async function updateAirplane(req,res){
    try{
        console.log("inside updateAirplane");
        const airplane = await airplaneService.updateAirplane(req.params.id,req.body);
        if(airplane[0]===0){
            ErrorResponse.message ="Could not find the airplane";
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
        }
        SuccessResponse.data=airplane
        return res.status(StatusCodes.CREATED).json(SuccessResponse)    
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}
module.exports={
    createAirplane,
    findAllAirplanes,
    findAirplaneById,
    deleteAirplaneById,
    updateAirplane
}