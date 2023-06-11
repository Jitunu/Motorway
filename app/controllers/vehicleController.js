const db = require('../models')
const sequelize = db.sequelize
const vehicleData = require('../dto/VehicleData');
const date = require('date-and-time');

const getVehicleState =  async (req, res) => {

    const id = req.params.vehicleId
    const timeStamp = req.params.timeStamp
    const [data] = await sequelize.query(
        'SELECT "vehicles"."id", "vehicles"."make", "vehicles"."model", "vehicles"."state", "stateLogs"."state" AS "stateLogsState", "stateLogs"."timestamp" AS "stateLogsTimestamp", "stateLogs"."vehicleId" AS "stateLogsVehicleId" FROM "vehicles" AS "vehicles" LEFT OUTER JOIN "stateLogs" AS "stateLogs" ON "vehicles"."id" = "stateLogs"."vehicleId" where "vehicles"."id" = '+id +' ORDER BY "stateLogs"."timestamp" asc'
      );
    
      vehicleData.result=[];
      vehicleData.vehicleDetails={};
      var result = vehicleData.result;
      var vehicleDetails = vehicleData.vehicleDetails;
    for(const val of data) {
        var databaseDate = new Date(val.stateLogsTimestamp);
        if(new Date(timeStamp).getTime() >= databaseDate.getTime()) {
            console.log(val);
            vehicleDetails.VehicleID = val.id;
            vehicleDetails.VehicleMake = val.make;
            vehicleDetails.VehicleModel = val.model;
            vehicleDetails.VehicleState = val.stateLogsState;
            result.push(vehicleDetails);    
        } 
    }
    if(result.length > 0) {
        res.status(200).json({ vehicleInfo: result[result.length - 1] });
    } else {
        res.status(200).json({ vehicleInfo: "No Vehicle Info for the given input timestamp" });
    }
}

module.exports = {
    getVehicleState,
}