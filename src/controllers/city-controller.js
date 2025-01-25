const { StatusCodes } = require('http-status-codes');
const {cityService} = require('../services');
const {ErrorResponse,SuccessResponse} = require("../utils/common")
async function createCity(req,res){
    try{
        console.log("Inside createCity controller");
        const city = await cityService.createCity(req.body);
        SuccessResponse.data=city;
        return res.status(StatusCodes.ACCEPTED).json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(SuccessResponse);
    }
}
async function findAllCities(req,res){
    try{
        console.log("Inside findAllCities controller");
        const city = await cityService.findAllCities();
        SuccessResponse.data=city;
        return res.status(StatusCodes.ACCEPTED).json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(SuccessResponse);
    }
}
async function deleteCity(req,res){
    try{
        console.log("Inside deleteCity controller",req.params.id);
        const city = await cityService.deleteCity(req.params.id);
        SuccessResponse.data=city;
        return res.status(StatusCodes.ACCEPTED).json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(SuccessResponse);
    }
}
module.exports={
    createCity,
    findAllCities,
    deleteCity
}