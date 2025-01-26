const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

//this is a middleware callback function
function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.message="Something went wrong in while creating airport";
        ErrorResponse.error = new AppError(['name not found in incoming request'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.code){
        ErrorResponse.message="Something went wrong in while creating airport";
        ErrorResponse.error = new AppError(['code not found in incoming request'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.address){
        ErrorResponse.message="Something went wrong in while creating airport";
        ErrorResponse.error = new AppError(['address not found in incoming request'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.cityId){
        ErrorResponse.message="Something went wrong in while creating airport";
        ErrorResponse.error = new AppError(['city Id not found in incoming request'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {validateCreateRequest};