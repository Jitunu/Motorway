module.exports = (sequelize, DataTypes) => {

const StateLogsData = sequelize.define('"stateLogs"', {

    state: DataTypes.STRING,
    timestamp: DataTypes.DATE
},
{
    createdAt: false,
    updatedAt: false,
    tableName: 'stateLogs',
    freezeTableName: true
});
StateLogsData.removeAttribute('id');
module.exports = StateLogsData;

    return StateLogsData;
}
