const { Flight } = require('../models/index');
const CrudRepository = require('./crud-repository');
// const{ Op } = require('sequelize');

class FlightRepository extends CrudRepository{

// #createFilter(data){

//     let filter = {...data};
//     if(data.arrivalAirportId){
//         filter.arrivalAirportId = data.arrivalAirportId;
//     }
//     if(data.departureAirportId){
//         filter.departureAirportId = data.departureAirportId;
//     }
//     // if(data.minPrice && data.maxPrice){
//     //    Object.assign(filter, {
//     //     [Op.and]: [
//     //         { price: {[Op.gte]: data.minPrice}},
//     //         { price: {[Op.lte]: data.maxPrice}}
//     //     ] 
//     //    }) 
//     // }
//     // if(data.minPrice){
//     //     Object.assign(filter, { price: {[Op.gte]: data.minPrice}});
//     // }
//     // if(data.maxPrice){
//     //     Object.assign(filter, { price: {[Op.lte]: data.maxPrice}});
//     // }

//     let priceFilter = [];
//     if(data.minPrice){
//         priceFilter.push({ price: {[Op.gte]: data.minPrice}})
//     }
//     if(data.maxPrice){
//         priceFilter.push({ price: {[Op.lte]: data.maxPrice}})
//     }
//     Object.assign(filter, { [Op.and]: priceFilter });
    
//     return filter;
// }

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

//     async getAllFlight(filter){
//         try {
//             const filterObject = this.#createFilter(filter);
//             const flight = await Flight.findAll({
//                 where: filterObject
//             })
//             return flight;

//         } catch (error) {
//             console.log("Something went wrong in repository layer");
//             throw{error};
//         }
//     }
// 

constructor(){
    super(Flight);
}

}

module.exports = FlightRepository;