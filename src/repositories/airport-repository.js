const CrudRepository = require("./crud-repository"); //crudRepository is a class
const {Airport} = require("../models"); //this is like a entity object
class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airport);
    } // it has all the crud functionalities where are there in CrudRepository class
    //to do: add specific queries if needed here.
}
module.exports = AirplaneRepository;