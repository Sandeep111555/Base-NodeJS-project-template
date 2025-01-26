const { StatusCodes } = require('http-status-codes');
const {airportService} = require('../services');
const {ErrorResponse,SuccessResponse} = require("../utils/common")
async function createAirport(req,res){
    try{
        console.log("Inside createAirport controller");
        const airport = await airportService.createAirport(req.body);
        SuccessResponse.data=airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}
async function findAllAirports(req,res){
    try{
        console.log("Inside findAllAirports controller");
        const airport = await airportService.findAllAirports();
        SuccessResponse.data=airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(SuccessResponse);
    }
}
async function deleteAirport(req,res){
    try{
        console.log("Inside deleteAirport controller",req.params.id);
        const airport = await airportService.deleteAirport(req.params.id);
        if(airport===0){
            ErrorResponse.message = "Cannot find the airport";
            return res.status(StatusCodes.BAD_GATEWAY).json(ErrorResponse);
        }
        SuccessResponse.data=airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(SuccessResponse);
    }
}
async function findAirportById(req,res){
    try{
        console.log("Inside findAirportById controller");
        const airport = await airportService.findAirportById(req.params.id); //returns null in case of find
        SuccessResponse.data=airport;
        if(airport===null){
            ErrorResponse.message ="Could not find the airport";
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
        }
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(SuccessResponse);
    }
}
module.exports={
    createAirport,
    findAllAirports,
    deleteAirport,
    findAirportById
}