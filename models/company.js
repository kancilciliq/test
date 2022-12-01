const { Sequelize, DataTypes } = require("sequelize");
const users = require('./users.js')


module.exports = (Sequelize, DataTypes) => {
    const company = Sequelize.define(
        'company',
        {
            id_company: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
              },
              name: {
                type: DataTypes.STRING,
              },
              adress: {
                type: DataTypes.STRING
              },
              id_user:{
                type: DataTypes.INTEGER
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
            tableName : 'company'
        }     
    );
    users.associate = function(models){
        company.hasMany(models.users, {as: 'employe'})
      }
    return company;
};


