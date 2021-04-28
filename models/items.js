const {DataTypes} = require('sequelize');
const connect =require('../configdb.js');
//const {mfg}=require('./manufacturer.js');
const item=connect.define('item',{
	item_id:{
		type:DataTypes.INTEGER,
		primarykey:true,

	},
	item_name:{
		type:DataTypes.STRING,
		allowNull:false
	},
	item_type:{
		type:DataTypes.STRING,
		allowNull:false
	},
	manf_id:{
		type:DataTypes.INTEGER,
		allowNull:false,
		/*references:{
			model:mfg,
			key:'mfg_id'
		}*/

	},
	quantity:{
		type:DataTypes.INTEGER,
		allowNull:false,
	},
	color:{
		type:DataTypes.STRING,
		allowNull:false
	}
	}
		);
module.exports={item};