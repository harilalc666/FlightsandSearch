const {City} = require('../models/index');

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
}

module.exports = CityRepository;