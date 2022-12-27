const CrudService = require('./crud-services');
const { AirplaneRepository, FlightRepository } = require('../repository/index');
const {compareTime} = require('../UTILS/helper');

// class FlightService{

//     constructor(){
//         this.airplanerepository = new AirplaneRepository();
//         this.flightrepository = new FlightRepository();
//     }

//     async createFlight(data) {

//         try {
//             if(!compareTime(data.arrivalTime,data.departureTime)){
//                 throw{error: "Arrival time should be greater then departure time"};
//             }
//             const airplanecapa = await this.airplanerepository.getAirplane(data.airplaneId);
//             const flight = await this.flightrepository.createFlight({...data, totalSeats:airplanecapa.capacity});
//             return flight;          
//         } catch (error) {
//             console.log("Something went wrong in service layer");
//             throw{ error }
//         }
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

class FlightService extends CrudService{
    constructor(){
        const flightrepository = new FlightRepository();
        super(flightrepository);
    }
    
    
}

module.exports = FlightService;