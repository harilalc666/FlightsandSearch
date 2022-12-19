
const { CityService } = require('../services/index');

const cityService = new CityService();

/*
 * 
POST --> ./city
 */
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        
        return res.status(201).json({
            data: city,
            success : true,
            message : "Successfully created City",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to create city",
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
        const response = await cityService.deleteCity(req.param.id);
        return res.status(200).json({
            data: response,
            success : true,
            message : "Successfully deleted City",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to delete city",
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
        const city = await cityService.updateCity(req.param.id, req.body);
        return res.status(201).json({
            data: city,
            success : true,
            message : "Successfully updated City",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to update city",
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
        const response = await cityService.createCity(req.param.id);
        return res.status(200).json({
            data: response,
            success : true,
            message : "Successfully fetched City",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message : "Not able to get city",
            success : false,
            error : error
        });
    }
}

module.exports = {
    create, destroy,update,get
}