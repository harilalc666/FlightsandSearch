const express = require('express');
const CityController = require('../../controller/city-controller');
const AirPortController = require('../../controller/airport-controller')

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


module.exports = router;