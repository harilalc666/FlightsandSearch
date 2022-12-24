const { AirplaneRepository, FlightRepository } = require('../repository/index');

class FlightService{

    constructor(){
        this.airplanerepo = new AirplaneRepository();
        this.flightrepo = new FlightRepository();
    }

    async createFlight(data) {

        try {
            
            const airplane = this.airplanerepo.getAirplane(data.airplaneId);
            const flight = this.flightrepo.createFlight({...data, totalSeats:airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw{ error }
        }
    }
}

module.exports = FlightService;