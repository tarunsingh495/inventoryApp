const {Sequelize,DataTypes} = require('sequelize');
const connect = new Sequelize('inventory', 'abhi2', '4981', {
  host: 'localhost',
  dialect: 'mysql' ,
 
});
module.exports=connect;
