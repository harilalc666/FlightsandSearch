const express = require('express');
const CityController = require('../../controller/city-controller');
const AirPortController = require('../../controller/airport-controller')
const AirplaneController = require('../../CONTROLLER/airplane-controller');
const FlightController = require('../../CONTROLLER/flight-controller');
const router = express.Router();


router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update)
router.get('/city',CityController.getAll);

router.post('/airport', AirPortController.create);
router.delete('/airport/:id', AirPortController.destroy);
router.get('/airport/:id', AirPortController.get);
router.get('/airport',AirPortController.getAll);
router.patch('/airport/:id', AirPortController.update)

router.post('/airplane', AirplaneController.create);
router.delete('/airplane/:id', AirplaneController.destroy);
router.get('/airplane/:id', AirplaneController.get);
router.get('/airplane',AirplaneController.getAll);
router.patch('/airplane/:id', AirplaneController.update)

router.post('/flight', FlightController.create);
router.get('/flight/:id', FlightController.get);
router.get('/flight', FlightController.getAll);

module.exports = router;