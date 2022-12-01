const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const items = Sequelize.define(
        'items',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
              },
              name: {
                type: DataTypes.STRING,
              },
              price: {
                type: DataTypes.STRING,
              },
              createdAt: {
                type: DataTypes.DATE,
                allowNull: false
              },
              updatedAt: {
                type: DataTypes.DATE,
                allowNull: false
              }
        },{
            tableName : 'items'
        }     
    );
    return items;
};
