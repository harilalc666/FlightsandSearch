const { CityRepository } = require('../repository/index');

class CityService{
    constructor(){
        this.cityrepository = new CityRepository();
    }

    async createCity(data) {
        try {
            ;
            console.log("hitting service folder");
            const city = await this.cityrepository.createCity(data);
            
            return city;
        } catch (error) {
           console.log("Something went wrong in Service layer");
           throw{ error }; 
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityrepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw{ error };
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityrepository.updateCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw{ error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityrepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw{ error };
        }
    }
}

module.exports = CityService;