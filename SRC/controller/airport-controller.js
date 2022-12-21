const { AirportService } = require('../services/index');

const airportservice = new AirportService();

/*
 * 
POST --> ./airport
 */
const create = async (req, res) => {
    try {
        
        const airport = await airportservice.createAirport(req.body);
        
        return res.status(201).json({
            data: airport,
            success : true,
            message : "Successfully created Airport",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to create Airport",
            success : false,
            error : error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await airportservice.deleteAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success : true,
            message : "Successfully deleted airport",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to delete airport",
            success : false,
            error : error
        });
    }
}

const update = async (req, res) => {
    try {
        const airport = await airportservice.updateAirport(req.params.id, req.body);
        return res.status(201).json({
            data: airport,
            success : true,
            message : "Successfully updated airport",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to update airport",
            success : false,
            error : error
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await airportservice.getAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success : true,
            message : "Successfully fetched airport",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to get airport",
            success : false,
            error : error
        });
    }
}

const getAll = async (req,res) => {
    try {
        const airports = await airportservice.getAllAirports(req.query)
        return res.status(200).json({
            data: airports,
            success : true,
            message : "Successfully fetched Airports",
            error: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to fetch the Airports",
            success : false,
            error : error
        });
    }
}



module.exports = {
    create,destroy,get,getAll,update
}