const { AirplaneService } = require('../SERVICES/index');

const airplaneservice = new AirplaneService();

/*
 * 
POST --> ./city
 */
const create = async (req, res) => {
    try {
        
        const city = await airplaneservice.createAirplane(req.body);
        
        return res.status(201).json({
            data: city,
            success : true,
            message : "Successfully created airplane",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to create airplane",
            success : false,
            error : error
        });
    }
}

/*
 * 
 DELETE --> ./city/:id
 */
const destroy = async (req, res) => {
    try {
        const response = await airplaneservice.deleteAirplane(req.params.id);
        return res.status(200).json({
            data: response,
            success : true,
            message : "Successfully deleted airplane",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to delete airplane",
            success : false,
            error : error
        });
    }
}

/***
 * PATCH --> ./city/:id
 */
const update = async (req, res) => {
    try {
        const city = await airplaneservice.updateAirplane(req.params.id, req.body);
        return res.status(201).json({
            data: city,
            success : true,
            message : "Successfully updated airplane",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to update airplane",
            success : false,
            error : error
        });
    }
}

/**
 * GET --> ./city/:id
 */
const get = async (req, res) => {
    try {
        const response = await airplaneservice.getAirplane(req.params.id);
        return res.status(200).json({
            data: response,
            success : true,
            message : "Successfully fetched airplane",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to get airplane",
            success : false,
            error : error
        });
    }
}

const getAll = async (req,res) => {
    try {
        const cities = await airplaneservice.getAllAirplane(req.query)
        return res.status(200).json({
            data: cities,
            success : true,
            message : "Successfully fetched airplane",
            error: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to fetch the airplane",
            success : false,
            error : error
        });
    }
}

module.exports = {
    create, destroy,update,get,getAll
}