const { StatusCodes } = require("http-status-codes");
const {CityRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");
const cityRepository = new CityRepository();

//POST data:{name: ""}
async function createCity(data){
    try{
        console.log("Inside createCity service",data);
        const city = await cityRepository.create(data);
        return city;
    } catch(error){
        console.log("Inside catch of createCity service");
        if(error.name === "SequelizeValidationError"){
            let explanation=[];
            error.errors.forEach(error => {
                explanation.push(error.message)
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        } else {
            throw new AppError("Error in creating city",StatusCodes.BAD_REQUEST);
        }
    }
}
//GET data{}
async function findAllCities(){
    try{
        console.log("Inside getAllCities service");
        const city = await cityRepository.findAll();
        return city;
    } catch(error){
        console.log("Inside catch of getAllCities service",error);
        if(error.name === "SequelizeValidationError"){
            let explanation=[];
            error.errors.forEach(error => {
                explanation.push(error.message)
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        } else {
            throw new AppError("Error in getting cities",StatusCodes.BAD_REQUEST);
        }
    }
}
//DELETE data{id:number}
async function deleteCity(id){
    try{
        console.log("Inside deleteCity service",id);
        const city = await cityRepository.destroy(id);
        return city;
    } catch(error){
        console.log("Inside catch of deleteCity service",error);
        if(error.name === "SequelizeValidationError"){
            let explanation=[];
            error.errors.forEach(error => {
                explanation.push(error.message)
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        } else {
            throw new AppError("Error in deleting city",StatusCodes.BAD_REQUEST);
        }
    }
}
module.exports = {createCity,findAllCities,deleteCity};