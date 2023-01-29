const {City} = require('../models/index');
const { Op } = require('sequelize');
const CrudRepository = require('./crud-repository');

class CityRepository extends CrudRepository{
    // async createCity( data ){
    //     try {  
    //         const city = await City.create({ name:data.name });
            
    //         return city;
    //     }
    //     catch(error) {
    //         console.log("Something went wrong in repository");
    //         throw { error };
    //     }
    // }

    // adding data in multiple format
    // async createCity( data ){
    //     try {
    //         const city = await City.bulkCreate(data, {fields: ['name']});
    //         return city;
    //     } catch (error) {
    //         console.log("Something went wrong in repository");
    //         throw { error };
    //     }
    // }

    // async deleteCity( cityId ){
    //     try {
    //         await City.destroy({where: {id: cityId}})
    //         return true;
    //     }
    //     catch(error) {
    //         console.log("Something went wrong in repository");
    //         throw { error };
    //     }
    // }

    // async updateCity( cityId, data ){
    //     try{
    //         //  The below approach also works but will not return update object as it only supports postgres db
    //         // const city = await City.update(data {
    //         //    where : {
    //         //        id : citiId
    //         //    }
    //         // })

    //         //for getting data in mysql we use below approach
    //        const city = await City.findByPk(cityId);
    //        city.name = data.name;
    //        await city.save();
    //         return city;
    //     }
    //     catch( error ){
    //         console.log("Something went wrong in repository");
    //         throw{ error }
    //     }
    // }

    // async getCity( cityId ){
    //     try{
    //         const city = await City.findByPk( cityId );
    //         return city;
    //     }
    //     catch( error ){
    //         console.log("Something went wrong in repository");
    //         throw{ error }
    //     }  
    // }


    constructor(){
        super(City)
    }

    // async getAllCities(filter){
    //     try {
    //         if(filter.name){
    //             const cities = await this.City.findAll({
    //                 where:{
    //                     name : {
    //                         [Op.startsWith] : filter.name
    //                     }
    //                 }
    //             })
    //             return cities;
    //         }
    //         const cities = await City.findAll();
    //         return cities;
    //     } catch (error) {
    //         console.log("Something went wrong in repository");
    //         throw{ error }
    //     }
    // }
    async getAll(filter, limit = 10, offset = 0){
        try {
            if(filter.name){
                const result = await this.model.findAll({
                    limit,
                    offset,
                    where:{
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }
                })
                return result;
            }

            const flights = await this.model.findAll({
                    limit,
                    offset,
                    where: filter
                })
                return flights;
        } catch (error) {
            console.log("Something went wrong in repository");
            throw{ error }
        }
    
    } 
}

module.exports = CityRepository;