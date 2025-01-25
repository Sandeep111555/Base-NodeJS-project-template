const { StatusCodes } = require("http-status-codes");
const {ErrorResponse} = require("../utils/common");
const { AppError } = require("../utils/errors/app-error");
function validateCreateRequest(req,res,next){
    console.log("inside validateCreateRequest");
    if(!req.body.modelNumber){
        ErrorResponse.message = "Something went wrong while creating airplane";
        ErrorResponse.error = new AppError(["Model not found in the request for creating airplane"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports = {validateCreateRequest};