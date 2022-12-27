const { Airport } = require('../models/index');
// const { Op } = require('sequelize');
const CrudRepository = require('./crud-repository');


class AirportRepository extends CrudRepository{
    //create api done
    // async createAirport( data ){
    //     try {  
    //         const airport = await Airport.create( {
    //             name: data.name, 
    //             cityId: data.cityId
    //         });
            
    //         return airport;
    //     }
    //     catch(error) {
    //         console.log("Something went wrong in repository");
    //         throw { error };
    //     }
    // }

    // async deleteAirport(airportId){
    //     try {
    //         await Airport.destroy({
    //             where: {
    //                 id: airportId
    //             }
    //         });
    //         return true;
    //     }
    //     catch(error) {
    //         console.log("Something went wrong in repository");
    //         throw { error };
    //     }
    // }

    // async updateAirport( airportId, {name,cityId}){
    //     try{
    //         //  The below approach also works but will not return update object as it only supports postgres db
    //         // const city = await City.update(data {
    //         //    where : {
    //         //        id : citiId
    //         //    }
    //         // })

    //         //for getting data in mysql we use below approach
    //        const airport = await Airport.findByPk(airportId);
    //        airport.name = name;
    //        airport.cityId = cityId;
    //        await airport.save();
    //         return airport;
    //     }
    //     catch( error ){
    //         console.log("Something went wrong in repository");
    //         throw{ error }
    //     }
    // }

    // async getAirport(airportId){
    //     try{
    //         const airport = await Airport.findByPk(airportId);
    //         return airport;
    //     }
    //     catch( error ){
    //         console.log("Something went wrong in repository");
    //         throw{ error }
    //     }  
    // }

    // async getAllAirports(filter){
    //     try {
    //         if(filter.name){
    //             const airport = await Airport.findAll({
    //                 where:{
    //                     name : {
    //                         [Op.startsWith] : filter.name
    //                     }
    //                 }
    //             })
    //             return airport;
    //         }
    //         const airport = await Airport.findAll();
    //         return airport;
    //     } catch (error) {
    //         console.log("Something went wrong in repository");
    //         throw{ error }
    //     }
    // }
    constructor(){
        super(Airport)
    }

}

module.exports = AirportRepository;