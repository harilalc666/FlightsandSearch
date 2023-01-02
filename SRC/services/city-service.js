const CrudService = require('./crud-services');
const { CityRepository } = require('../repository/index');

class CityService extends CrudService{

    constructor(){
        const cityrepository = new CityRepository();
        super(cityrepository);
    }

    // async createCity(data) {
    //     try {
    //         ;
    //         console.log("hitting service folder");
    //         const city = await this.cityrepository.createCity(data);
            
    //         return city;
    //     } catch (error) {
    //        console.log("Something went wrong in Service layer");
    //        throw{ error }; 
    //     }
    // }

    // async deleteCity(cityId) {
    //     try {
    //         const response = await this.cityrepository.deleteCity(cityId);
    //         return response;
    //     } catch (error) {
    //         console.log("Something went wrong in Service layer");
    //         throw{ error };
    //     }
    // }

    // async updateCity(cityId, data) {
    //     try {
    //         const city = await this.cityrepository.updateCity(cityId,data);
    //         return city;
    //     } catch (error) {
    //         console.log("Something went wrong in Service layer");
    //         throw{ error };
    //     }
    // }

    // async getCity(cityId) {
    //     try {
    //         const city = await this.cityrepository.getCity(cityId);
    //         return city;
    //     } catch (error) {
    //         console.log("Something went wrong in Service layer");
    //         throw{ error };
    //     }
    // }

       

    // async getAllCities(filter){
    //     try {
    //         const cities = await cityrepository.getAllCities({name : filter.name})
    //         return cities;
    //     } catch (error) {
    //         console.log("Something went wrong in Service layer");
    //         throw{ error };
    //     }
    // }
    
}

module.exports = CityService;