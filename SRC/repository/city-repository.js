const {City} = require('../models/index');
const { Op } = require('sequelize');

class CityRepository{
    async createCity( data ){
        try {  
            const city = await City.create({ name:data.name });
            
            return city;
        }
        catch(error) {
            console.log("Something went wrong in repository");
            throw { error };
        }
    }

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

    async deleteCity( cityId ){
        try {
            await City.destroy({where: {id: cityId}})
            return true;
        }
        catch(error) {
            console.log("Something went wrong in repository");
            throw { error };
        }
    }

    async updateCity( cityId, data ){
        try{
            //  The below approach also works but will not return update object as it only supports postgres db
            // const city = await City.update(data {
            //    where : {
            //        id : citiId
            //    }
            // })

            //for getting data in mysql we use below approach
           const city = await City.findByPk(cityId);
           city.name = data.name;
           await city.save();
            return city;
        }
        catch( error ){
            console.log("Something went wrong in repository");
            throw{ error }
        }
    }

    async getCity( cityId ){
        try{
            const city = await City.findByPk( cityId );
            return city;
        }
        catch( error ){
            console.log("Something went wrong in repository");
            throw{ error }
        }  
    }

    async getAllCities(filter){
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where:{
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in repository");
            throw{ error }
        }
    }
}

module.exports = CityRepository;