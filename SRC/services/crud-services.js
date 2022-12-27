class CrudService{
    constructor(repository){
        this.repository = repository;
    }

    async createFlight(data){
        try {
            const flight = await this.repository.create(data)
            return flight;
        } catch (error) {
            console.log("Something went wring in crud repository");
            throw{ error }
        }
    }

    async destroyFlight(dataId){
        try {
            const response = await this.repository.destroy(dataId);
            return response;
        } catch (error) {
            console.log("Something went wring in crud repository");
            throw{ error }
        }
    }

    async updateFlight(dataId, data){
        try {
            const flight = await this.repository.update(dataId, data);
            return flight;
        } catch (error) {
            console.log("Something went wring in crud repository");
            throw{ error } 
        }
    }

    async getFlight(dataId){
        try {
            const result = await this.repository.get(dataId);
            return result;
        } catch (error) {
            console.log("Something went wring in crud repository");
            throw{ error }
        }
    }

    async getAllFlights(){
        try {
            const flightsall = await this.repository.getAll();
            return flightsall;
        } catch (error) {
            console.log("Something went wring in crud repository");
            throw{ error }
        }
    }
}

module.exports = CrudService;