
const controller = require('../controllers/vehicleController');
const router = require('express').Router();

router.get('/vehicle/:vehicleId/:timeStamp', controller.getVehicleState);

module.exports = router;