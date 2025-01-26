const { StatusCodes } = require('http-status-codes');
const {flightService} = require('../services');
const {ErrorResponse,SuccessResponse} = require("../utils/common")
async function createFlight(req,res){
    try{
        console.log("Inside createFlight controller");
        const flight = await flightService.createFlight(req.body);
        SuccessResponse.data=flight;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}
async function getAllFlights(req,res){
    try{
        console.log("Inside findAllFlights controller");
        const flight = await flightService.getAllFlights(req.query);
        SuccessResponse.data=flight;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}
module.exports={
    createFlight,
    getAllFlights,
}