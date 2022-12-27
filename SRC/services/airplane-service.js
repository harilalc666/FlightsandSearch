const CrudService = require('./crud-services');
const { AirplaneRepository } = require('../REPOSITORY/index');

class AirplaneService extends CrudService{
    constructor(){
        const airplanerepository = new AirplaneRepository();
        super(airplanerepository)
    }

    // async createAirplane({id,Model_number,capacity}) {
    //     try {
    //         const airplane = await this.airplanerepository.createAirplane({id,Model_number,capacity});

    //         return airplane;
    //     } catch (error) {
    //         console.log("Something went wrong in Service layer");
    //         throw{ error };
    //     }
    // }

    // async deleteAirplane(id){
    //     try {
    //         const response = await this.airplanerepository.deleteAirplane(id);
    //         return response;
    //     } catch (error) {
    //         console.log("Something went wrong in Service layer");
    //         throw{ error };
    //     }
    // }

    // async updateAirplane(id,data){
    //     try {
    //         const airplane = await this.airplanerepository.updateAirplane(id,data);
    //         return airplane;

    //     } catch (error) {
    //         console.log("Something went wrong in Service layer");
    //         throw{ error };
    //     }
    // }

    // async getAirplane(id){
    //     try {
    //         const airplane = await this.airplanerepository.getAirplane(id);

    //         return airplane;
    //     } catch (error) {
    //         console.log("Something went wrong in Service layer");
    //         throw{ error };
    //     }
    // }

    // async getAllAirplane(filter){
    //     try {
    //         const airplane = this.airplanerepository.getAllAirplane({name: filter.name});
    //         return airplane;
    //     } catch (error) {
    //         console.log("Something went wrong in Service layer");
    //         throw{ error };
    //     }
    // }
}

module.exports = AirplaneService;