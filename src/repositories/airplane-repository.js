const CrudRepository = require("./crud-repository"); //crudRepository is a class
const {Airplane} = require("../models"); //this is like a entity object
class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane);
    } // it has all the crud functionalities where are there in CrudRepository class
    //to do: add specific queries if needed here.
}
module.exports = AirplaneRepository;