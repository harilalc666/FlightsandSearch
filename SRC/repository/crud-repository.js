

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const flight = await this.model.create(data);
            return flight;
        } catch (error) {
            console.log("Soomething went wrong in the crud repository");
            throw{ error }
        }
    }

    async destroy(dataId){
        try {
            const response = await this.model.destroy({
                where: {
                    id: dataId
                }
            });
            return response;
        } catch (error) {
            console.log("Soomething went wrong in the crud repository");
            throw{ error } 
        }
    }

    async update(flightId, data){
        try {
            const flight = await this.model.update(data,{
                where: {
                    id: flightId
                }
            });
            return flight;
        } catch (error) {
            console.log("Soomething went wrong in the crud repository");
            throw{ error } 
        }
    }

    async get(dataId){
        try {
            const result = await this.model.findByPk(dataId);
            return result;
        } catch (error) {
            console.log("Soomething went wrong in the crud repository");
            throw{ error }
        }
    }

    async getAll(){
        try {
            console.log("hitting crud repo");
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            // console.log("Soomething went wrong in the crud repository");
            throw{ error } 
        }
    }
}

module.exports = CrudRepository;