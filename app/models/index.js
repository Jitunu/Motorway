const dbConfig = require('../config/db.config.js');
const Vehicle = require('../models/vehicles.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.vehicle = require('./vehicles.js')(sequelize, DataTypes)
db.stateLogs = require('./stateLogs.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})



// 1 to Many Relation

db.vehicle.hasMany(db.stateLogs, {
    foreignKey: 'vehicleId',
    as: 'stateLogs',
    sourceKey: "id"
})

db.stateLogs.belongsTo(db.vehicle, {
    foreignKey: 'vehicleId',
    as: 'vehicle'
})





module.exports = db;