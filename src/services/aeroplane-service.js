const { StatusCodes } = require("http-status-codes");
const {Logger} = require("../config");
const {AirplaneRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        console.log("inside createAirplane service");
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        console.log("inside catch block of createAirplane service");
        if(error.name==="SequelizeValidationError"){
            //database error or error related to sequalize
            console.log("error",error);
            let explanation=[];
            error.errors.forEach((error)=>{
                explanation.push(error.message);
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        } else{
            throw new AppError("cannot create a new Airplane object",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}
async function findAllAirplanes(){
    try{
        console.log("inside findAllAirplanes service");
        const airplane = await airplaneRepository.findAll();
        return airplane;
    }
    catch(error){
        console.log("inside catch block of findAllAirplanes service");
        if(error.name==="SequelizeValidationError"){
            //database error or error related to sequalize
            console.log("error",error);
            let explanation=[];
            error.errors.forEach((error)=>{
                explanation.push(error.message);
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        } else{
            throw new AppError("Error in getting all Airplanes",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}
async function findAirplaneById(data){
    try{
        console.log("inside findAirplaneById service",data);
        const airplane = await airplaneRepository.findByPk(data); //data is id
        return airplane;
    }
    catch(error){
        console.log("inside catch block of findAirplaneByPk service",error);    
        if(error.name==="SequelizeValidationError"){
            //database error or error related to sequalize
            console.log("error",error);
            let explanation=[];
            error.errors.forEach((error)=>{
                explanation.push(error.message);
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        } else{
            throw new AppError("cannot create a new Airplane object",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}
async function deleteAirplane(data){
    try{
        console.log("Inside deleteAirplane service",data);
        const airplane = await airplaneRepository.destroy(data);
        return airplane;
    } catch(error){
        console.log("Inside catch block of deleteAirplane service",error);
        if(error.name==="SequelizeValidationError"){
            //database error or error related to sequalize
            console.log("error",error);
            let explanation=[];
            error.errors.forEach((error)=>{
                explanation.push(error.message);
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        } else{
            throw new AppError("cannot delete Airplane object",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

async function updateAirplane(id,data){
    try{
        console.log("inside updateAirplane service");
        const airplane = await airplaneRepository.update(id,data);
        return airplane;
    }
    catch(error){
        console.log("inside catch block of updateAirplane service");
        if(error.name==="SequelizeValidationError"){
            //database error or error related to sequalize
            console.log("error",error);
            let explanation=[];
            error.errors.forEach((error)=>{
                explanation.push(error.message);
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        } else{
            throw new AppError("cannot update Airplane",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = {
    createAirplane,
    findAllAirplanes,
    findAirplaneById,
    deleteAirplane,
    updateAirplane
}