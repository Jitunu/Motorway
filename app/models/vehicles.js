module.exports = (sequelize, DataTypes) => {

const Vehicle = sequelize.define("vehicles", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    state: DataTypes.STRING
},
{
    createdAt: false,
    updatedAt: false,
    tableName: 'vehicles',
    freezeTableName: true
});

module.exports = Vehicle;

return Vehicle
}