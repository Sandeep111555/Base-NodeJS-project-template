const {Op} = require('sequelize');
const {FlightRepository} = require('../repositories');
const flightRepository = new FlightRepository();

/***
 * POST data:{flightNumber: "", airplaneId:"",departureTime: "", arrivalTime: "", departureAirportId: "", arrivalAirportId: "",arivalTime: "", departureTime: "", price: "", boardingGate: "", totalSeats: ""}
 */
async function createFlight(data){
    try{
        console.log("Inside createFlight service",data);
        const flight = await flightRepository.create(data);
        return flight;
    } catch(error){
        console.log("Inside catch of Flight service",error);
        if(error.name === "SequelizeValidationError"){
            let explanation=[];
            error.errors.forEach(error => {
                explanation.push(error.message)
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        } else {
            throw new AppError("Error in creating Flight",StatusCodes.BAD_REQUEST);
        }
    }
}
/***
 * GET params:{?trips=MUM-DEL&price=4000-5000&date=2025-1-26&travellers=20&sort=price-asc,departureTime-desc}
 */
async function getAllFlights(queryParams){
    try{
        let customFilters = {};
        let sortFilter = [];
        console.log("Inside getAllFlights service");
        if(queryParams.trips){
            const [departureAirportId,arrivalAirportId] = queryParams.trips.split("-");
            customFilters = {
                departureAirportId,
                arrivalAirportId
            }
        }
        if(queryParams.price){
            const [minPrice,maxPrice] = queryParams.price.split("-");
            customFilters.price = {
                [Op.between]:[minPrice,maxPrice]
            }
        }
        if(queryParams.date){
            customFilters.departureTime = {
                [Op.gte]:queryParams.date
            }
        }
        if(queryParams.travellers){
            customFilters.totalSeats = {
                [Op.gte]:queryParams.travellers //table total seats should be greater than or equal to the travellers
            }
        }
        if(queryParams.sort){
            const sortQuery = queryParams.sort.split(",");
            sortFilter = sortQuery.map((params)=>params.split("-"));
        }

        const flight = await flightRepository.findAll(customFilters,sortFilter);
        return flight;
    } catch(error){
        console.log("Inside catch of getAllFlights service",error);
        if(error.name === "SequelizeValidationError"){
            let explanation=[];
            error.errors.forEach(error => {
                explanation.push(error.message)
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        } else {
            throw new AppError("Error in getting Flight",StatusCodes.BAD_REQUEST);
        }
    }
}
module.exports={
    createFlight,
    getAllFlights
}