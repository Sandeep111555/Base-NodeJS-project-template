const CrudRepository = require('./crud-repository');
const { Flight, Airplane, Airport, City } = require('../models');
const {Sequelize} = require('sequelize');

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }
    //findAll function
    async findAll(filters, sortFilter) {
        const response = await this.model.findAll({
            where: filters,
            order: sortFilter,
            include: [{
                model: Airplane,
                as: 'airplaneDetail',
                required: true,
            },
            {
                model: Airport,
                as: 'departureAirport',
                on: {
                    col1: Sequelize.where(Sequelize.col('departureAirportId'), '=', Sequelize.col('departureAirport.code'))
                },
                include: [{
                    model: City,
                    required: true,
                }],
                required: true,
            },
            {
                model: Airport,
                as: 'arrivalAirport',
                on: {
                    col1: Sequelize.where(Sequelize.col('arrivalAirportId'), '=', Sequelize.col('arrivalAirport.code'))
                },
                include: [{
                    model: City,
                    required: true,
                }],
                required: true,
            },
            ]
        });
        return response;
    }
};
module.exports = FlightRepository;