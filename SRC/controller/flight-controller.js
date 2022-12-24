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

module.exports = {
    create
}