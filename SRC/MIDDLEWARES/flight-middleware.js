// middleware is there to filterout which is not abiding the api contract
const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        // if any of the body params missing then go iside if
        return res.status(400).json({
            data: {},
            success: false,
            err: "Missing manditory properties to create flight",
            message: "Invalid request body for creating flight"
        })      
    }
    next();
}

module.exports = {
    validateCreateFlight
}