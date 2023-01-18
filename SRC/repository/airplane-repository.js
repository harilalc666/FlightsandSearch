const CrudRepository = require('./crud-repository');
const { Op } = require('sequelize');
const { Airplane } = require('../models/index');

class AirplaneRepository extends CrudRepository{

    // async createAirplane( data ){
    //     try {
    //      const airplane = await Airplane.create(data);
    //      return airplane;   
    //     } 
    //     catch (error) {
    //         console.log("Something went wrong in repository");
    //         throw { error };
    //     }
    // }

    // async deleteAirplane(airplaneId){
    //     try {
    //      await Airplane.destroy({where: { id:airplaneId }});
    //      return true;   
    //     } 
    //     catch (error) {
    //         console.log("Something went wrong in repository");
    //         throw { error };
    //     }
    // }

    // async updateAirplane(airplaneId, data){
    //     try {
    //         const airplane = await Airplane.findByPk(airplaneId);
    //         airplane.Model_number = data.Model_number;
    //         airplane.capacity = data.capacity;
    //         await airplane.save();
    //         return airplane;
    //     } catch (error) {
    //         console.log("Something went wrong in repository");
    //         throw{ error }
    //     }
    // }

    // async getAirplane(airplaneId){
    //     try {
    //      const airplane = await Airplane.findByPk(airplaneId);
    //      return airplane;
    //     } 
    //     catch (error) {
    //         console.log("Something went wrong in repository");
    //         throw{ error }
    //     }
    // }

    // async getAll(filter){
    //     try {
    //         if(filter.name){
    //             const airplane = await Airplane.findAll({ where: { name: { [Op.startsWith]: filter.name }}});
    //             return airplane;
    //         } 
    //     } 
    //     catch (error) {
    //         console.log("Something went wrong in repository");
    //         throw{ error }
    //     }
    // }   

    constructor(){
        super(Airplane);
    }

    async getAll(filter){
        try {
            if(filter.Model_number){
                const airport = await this.model.findAll({
                    where:{
                        Model_number : {
                            [Op.startsWith] : filter.Model_number
                        }
                    }
                })
                return airport;
            }
            const airport = await this.model.findAll();
            return airport;
        } catch (error) {
            console.log("Something went wrong in repository");
            throw{ error }
        }
    
    }

}
module.exports = AirplaneRepository;

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