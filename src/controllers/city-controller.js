const { StatusCodes } = require('http-status-codes');
const {cityService} = require('../services');
const {ErrorResponse,SuccessResponse} = require("../utils/common")
async function createCity(req,res){
    try{
        console.log("Inside createCity controller");
        const city = await cityService.createCity(req.body);
        SuccessResponse.data=city;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}
async function findAllCities(req,res){
    try{
        console.log("Inside findAllCities controller");
        const city = await cityService.findAllCities();
        SuccessResponse.data=city;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}
async function findCitybyId(req,res){
    try{
        console.log("Inside findbyId controller");
        const city = await cityService.findCityById(req.params.id); //returns null in case of find
        SuccessResponse.data=city;
        if(city===null){
            ErrorResponse.message ="Could not find the city";
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
        }
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}
async function deleteCity(req,res){
    try{
        console.log("Inside deleteCity controller",req.params.id);
        const city = await cityService.deleteCity(req.params.id); //returns boolean in case of delete
        SuccessResponse.data=city;
        console.log(city);
        if(city===0){
            ErrorResponse.message ="Could not find the city";
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
        }
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}
module.exports={
    createCity,
    findAllCities,
    deleteCity,
    findCitybyId
}