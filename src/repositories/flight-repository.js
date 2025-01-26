const CrudRepository = require('./crud-repository');
const { Flight } = require('../models');

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }
    //findAll function
    async findAll(filters,sortFilter) {
        const response = await this.model.findAll({ where: filters, order: sortFilter });
        return response;
    }
};
module.exports = FlightRepository;