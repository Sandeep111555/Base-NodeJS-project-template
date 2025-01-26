const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");
const {dateTimeCompare} = require("../utils/helper/dateTimeHelper");

//this is a middleware callback function
function validateCreateRequest(req,res,next){
    if(!req.body.flightNumber){
        ErrorResponse.message="Something went wrong in while creating Flight";
        ErrorResponse.error = new AppError(['Flight Number not found in incoming request'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.airplaneId){
        ErrorResponse.message="Something went wrong in while creating Flight";
        ErrorResponse.error = new AppError(['Airplane Id not found in incoming request'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message="Something went wrong in while creating Flight";
        ErrorResponse.error = new AppError(['arrivalAirportId not found in incoming request'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message="Something went wrong in while creating Flight";
        ErrorResponse.error = new AppError(['departureAirportId Id not found in incoming request'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.arivalTime){
        ErrorResponse.message="Something went wrong in while creating Flight";
        ErrorResponse.error = new AppError(['arivalTime Id not found in incoming request'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departureTime){
        ErrorResponse.message="Something went wrong in while creating Flight";
        ErrorResponse.error = new AppError(['departureTime Id not found in incoming request'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(dateTimeCompare(req.body.arivalTime,req.body.departureTime)){
        ErrorResponse.message="Something went wrong in while creating Flight";
        ErrorResponse.error = new AppError(['arivalTime should be less than departureTime'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.price){
        ErrorResponse.message="Something went wrong in while creating Flight";
        ErrorResponse.error = new AppError(['price Id not found in incoming request'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.totalSeats){
        ErrorResponse.message="Something went wrong in while creating Flight";
        ErrorResponse.error = new AppError(['totalSeats not found in incoming request'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {validateCreateRequest};