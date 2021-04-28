const {Sequelize,DataTypes} = require('sequelize');
const connect = new Sequelize('inventory', 'root', '4981', {
  host: 'localhost',
  dialect: 'mysql' ,
  port  :   3307
});
module.exports=connect;