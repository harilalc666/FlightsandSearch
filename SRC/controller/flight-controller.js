const { FlightService } = require('../SERVICES/index');

const flightservice = new FlightService();

const create = async (req,res) => {
    try {
        
        let filterRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            totalSeats: req.body.totalSeats
        }
        const flight = await flightservice.create(filterRequestData);
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

const destroy = async (req,res) => {
    try {
        const response = await flightservice.destroy(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            error: {},
            message: "Succesfully deleted the flight"
        })
    } catch (error) {
        console.log("Something went wrong in controller layer");
        throw{ error }
    }
}

const update = async (req, res) => {
    try {
        const flight = await flightservice.update(req.params.id, req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            error: {},
            message: "Succesfully updated the flight" 
        })
    } catch (error) {
        console.log("Something went wrong in controller layer");
        throw{ error }
    }
}

const get = async(req, res) => {
    try {
        const flight = await flightservice.get(req.params.id);
        return res.status(201).json({
            data: flight,
            success: true,
            message: "Successfully fetched flight details from get request",
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
        console.log('hitting controller');
        const response = await flightservice.getAll(req.query);
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
    create,
    get,
    getAll,
    destroy,
    update
}