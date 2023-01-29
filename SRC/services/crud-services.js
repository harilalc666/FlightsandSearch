class CrudService{
    constructor(repository){
        this.repository = repository;

    }

    async create(data){
        try {
            const response = await this.repository.create(data)
            return response;
        } catch (error) {
            console.log("Something went wring in crud repository");
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
            const response = await this.repository.update(dataId, data);
            return response;
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
            
            const response = await this.repository.getAll(filter);
            return response;
        } catch (error) {
            console.log("Something went wring in crud repository");
            throw{ error }
        }
    }
}

module.exports = CrudService;