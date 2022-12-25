const { AirplaneRepository, FlightRepository } = require('../repository/index');
const {compareTime} = require('../UTILS/helper');

class FlightService{

    constructor(){
        this.airplanerepository = new AirplaneRepository();
        this.flightrepository = new FlightRepository();
    }

    async createFlight(data) {

        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error: "Arrival time should be greater then departure time"};
            }
            const airplanecapa = await this.airplanerepository.getAirplane(data.airplaneId);
            const flight = await this.flightrepository.createFlight({...data, totalSeats:airplanecapa.capacity});
            return flight;          
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw{ error }
        }
    }
}

module.exports = FlightService;