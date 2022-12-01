const { Sequelize, DataTypes } = require('sequelize');
const company = require('./company.js')

module.exports = (Sequelize, DataTypes) => {
    const Users = Sequelize.define(
        'users',{
            id_user: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
              },
              username: {
                type: DataTypes.STRING,
              },
              email: {
                type: DataTypes.STRING
              },
              password: {
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
            tableName: 'users'
        }
    );
    company.associate = function(models){
      Users.belongTo(models.company, {foreignKey: 'id_company', as: 'company'})
    }
    return Users;
};
