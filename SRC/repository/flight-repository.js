const { Flight } = require('../models/index');
const CrudRepository = require('./crud-repository');
const{ Op } = require('sequelize');

class FlightRepository extends CrudRepository{

//     async createFlight(data){
//         try {
//             const fligth = await Flight.create(data);
//             return fligth;
//         } catch (error) {
//             console.log("Something went wrong in repository");
//             throw{ error };
//         }
//     }


//     async getFlight(Id){
//         try {
//             const flight = await Flight.findByPk(Id);
//             return flight;
//         } catch (error) {
//             console.log("Something went wrong in repository layer");
//             throw{error};
            
//         }
//     }

 

    constructor(){
        super(Flight);
    }

        #createFilter(data) {
            let filter = {};
            if(data.arrivalAirportId) {
                filter.arrivalAirportId = data.arrivalAirportId;
            }
            if(data.departureAirportId) {
                filter.departureAirportId = data.departureAirportId;
            }
    
            // if(data.minPrice && data.maxPrice) {
            //     Object.assign(filter, {
            //         [Op.and]: [
            //             { price: {[Op.lte]: data.maxPrice} }, 
            //             { price: {[Op.gte]: data.minPrice} }
            //         ]
            //     })
            // }
            let priceFilter = [];
            if(data.minPrice) {
                // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
                priceFilter.push({price: {[Op.gte]: data.minPrice}});
            }
            if(data.maxPrice) {
                // Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
                priceFilter.push({price: {[Op.lte]: data.maxPrice}});
            }
            Object.assign(filter, {[Op.and]: priceFilter});
            // Object.assign(filter, {[Op.and]: [{ price: {[Op.lte]: 7000} }, { price: {[Op.gte]: 4000} }]})
            console.log(filter);
            return filter;
        }

        async getAll(filter){
            try {
                
                const filterObj = this.#createFilter(filter);
                const flights = await this.model.findAll({
                where: filterObj
                })
                return flights;
            }
            catch (error) {
                console.log("Something went wrong in repository layer");
                throw{error};
            }
        }

}

module.exports = FlightRepository;

/**
 * flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price,
 * totalSeats
 */