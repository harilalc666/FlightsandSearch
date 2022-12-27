const { FlightService } = require('../SERVICES/index');

const flightservice = new FlightService();

const create = async (req,res) => {
    try {   
        const flight = await flightservice.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            error: {},
            message: "Succesfully created Flight" 
        })   
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to create flight",
            success : false,
            error : error
        });
    }
}

const get = async(req, res) => {
    try {
        const flight = await flightservice.getFlight(req.params.id);
        return res.status(201).json({
            data: flight,
            success: true,
            message: "Successfully fetched flight details",
            error:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            message: "Not able to fetch the flights",
            success: false,
            error: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const response = await flightservice.getAllFlight(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched flight details",
            error:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            message: "Not able to fetch the flights",
            success: false,
            error: error
        })
    }
}

module.exports = {
    create,get,getAll
}