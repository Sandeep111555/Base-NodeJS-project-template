const { StatusCodes } = require("http-status-codes");
const {AirportRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");
const airportRepository = new AirportRepository();

//POST data:{name: ""}
async function createAirport(data){
    try{
        console.log("Inside createAirport service",data);
        const city = await airportRepository.create(data);
        return city;
    } catch(error){
        console.log("Inside catch of airport service",error);
        if(error.name === "SequelizeValidationError"){
            let explanation=[];
            error.errors.forEach(error => {
                explanation.push(error.message)
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        } else {
            throw new AppError("Error in creating Airport",StatusCodes.BAD_REQUEST);
        }
    }
}
//GET data{}
async function findAllAirports(){
    try{
        console.log("Inside findAllAirports service");
        const city = await airportRepository.findAll();
        return city;
    } catch(error){
        console.log("Inside catch of findAllAirports service",error);
        if(error.name === "SequelizeValidationError"){
            let explanation=[];
            error.errors.forEach(error => {
                explanation.push(error.message)
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        } else {
            throw new AppError("Error in finding airports",StatusCodes.BAD_REQUEST);
        }
    }
}
//DELETE data{id:number}
async function deleteAirport(id){
    try{
        console.log("Inside deleteAirport service",id);
        const city = await airportRepository.destroy(id);
        return city;
    } catch(error){
        console.log("Inside catch of deleteAirport service",error);
        if(error.name === "SequelizeValidationError"){
            let explanation=[];
            error.errors.forEach(error => {
                explanation.push(error.message)
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        } else {
            throw new AppError("Error in deleting airport",StatusCodes.BAD_REQUEST);
        }
    }
}
//POST data{id:number}
async function findAirportById(id){
    try{
        console.log("Inside findAirportById service",id);
        const airport = await airportRepository.findByPk(id);
        return airport;
    } catch(error){
        console.log("Inside catch of findAirportById service",error);
        if(error.name === "SequelizeValidationError"){
            let explanation=[];
            error.errors.forEach(error => {
                explanation.push(error.message)
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        } else {
            throw new AppError("Error in getting airport",StatusCodes.BAD_REQUEST);
        }
    }
}
module.exports = {
    createAirport,
    findAllAirports,
    deleteAirport,
    findAirportById};