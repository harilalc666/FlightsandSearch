const { Flight } = require('../models/index');

class FlightRepository{
    async createFlight(data){
        try {
            const fligth = await Flight.create(data);
            return fligth;
        } catch (error) {
            console.log("Something went wrong in repository");
            throw{ error };
        }
    }
}

module.exports = FlightRepository;