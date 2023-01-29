const CrudService = require('./crud-services');
const { FlightRepository } = require('../repository/index');
const {compareTime} = require('../UTILS/helper');
const { AirplaneRepository } = require('../repository/index');
// class FlightService{

//     constructor(){
//         this.airplanerepository = new AirplaneRepository();
//         this.flightrepository = new FlightRepository();
//     }

//     async getFlight(Id){
//         try {
//             const flight = await this.flightrepository.getFlight(Id);
//             return flight;
//         } catch (error) {
//             console.log("Something went wrong in service layer");
//             throw{ error };
//         }
//     }

//     async getAllFlight(data){
//         try {
//             const flight = await this.flightrepository.getAllFlight(data);
//             return flight;
//         } catch (error) {
//             console.log("Something went wrong in service layer");
//             throw{ error };
//         }
//     }
// }

const airplaneRepository = new AirplaneRepository();
class FlightService extends CrudService{
    constructor(){
        const flightrepository = new FlightRepository();
        super(flightrepository)
    }
    
    async create(data) {

        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error: "Arrival time should be greater then departure time"};
            }
            const airplanecapa = await airplaneRepository.get(data.airplaneId);
            const flight = await super.create({...data, totalSeats:airplanecapa.capacity});
            return flight;         
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw{ error }
        }
    }
    

}


module.exports = FlightService;