const { AirportRepository } = require('../repository/index');

class AirportService{
    constructor(){
        this.airportrepository = new AirportRepository();
    }

    async createAirport({name,cityId}) {
        try {
            console.log("hitting service folder");
            const airport = await this.airportrepository.createAirport({name,cityId});
            return airport;
        } 
        catch (error) {
           console.log("Something went wrong in Service layer");
           throw{ error };
        }
    }



    async deleteAirport(airportId) {
        try {
            const response = await this.airportrepository.deleteAirport(airportId);
            return response;
        }
        catch (error) {
            console.log("Something went wrong in Service layer");
            throw{ error };
        }
    }

    async updateAirport(airportId, {name,cityId}) {
        try {
            const airport = await this.airportrepository.updateAirport(airportId,{name,cityId});
            return airport;
        } 
        catch (error) {
            console.log("Something went wrong in Service layer");
            throw{ error };
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await this.airportrepository.getAirport(airportId);
            return airport;
        } 
        catch (error) {
            console.log("Something went wrong in Service layer");
            throw{ error };
        }
    }

    async getAllAirports(filter){
        try {
            const airport = await this.airportrepository.getAllAirports({name: filter.name})
            return airport;
        } 
        catch (error) {
            console.log("Something went wrong in Service layer");
            throw{ error };
        }
    }
}



module.exports = AirportService;