const {DataTypes} = require('sequelize');
const connect =require('../configdb.js');
const item=connect.define('item',{
	item_id:{
		type:DataTypes.STRING,
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
		allowNull:false
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
module.exports=item;