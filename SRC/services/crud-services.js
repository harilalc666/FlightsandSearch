const { AirplaneRepository } = require('../repository/index');
const {compareTime} = require('../UTILS/helper');

const airplaneRepository = new AirplaneRepository();

class CrudService{
    constructor(repository){
        this.repository = repository;

    }

    // async create(data){
    //     try {
    //         const flight = await this.repository.create(data)
    //         return flight;
    //     } catch (error) {
    //         console.log("Something went wring in crud repository");
    //         throw{ error }
    //     }
    // }

    async create(data) {

        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error: "Arrival time should be greater then departure time"};
            }
            const airplanecapa = await airplaneRepository.get(data.airplaneId);
            const flight = await this.repository.create({...data, totalSeats:airplanecapa.capacity});
            return flight;         
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw{ error }
        }
    }

    async destroy(dataId){
        try {
            const response = await this.repository.destroy(dataId);
            return response;
        } catch (error) {
            console.log("Something went wring in crud repository");
            throw{ error }
        }
    }

    async update(dataId, data){
        try {
            const flight = await this.repository.update(dataId, data);
            return flight;
        } catch (error) {
            console.log("Something went wring in crud repository");
            throw{ error } 
        }
    }

    async get(dataId){
        try {
            const result = await this.repository.get(dataId);
            return result;
        } catch (error) {
            console.log("Something went wring in crud repository");
            throw{ error }
        }
    }

    async getAll(filter){
        try {
            
            const flightsall = await this.repository.getAll(filter);
            return flightsall;
        } catch (error) {
            console.log("Something went wring in crud repository");
            throw{ error }
        }
    }
}

module.exports = CrudService;