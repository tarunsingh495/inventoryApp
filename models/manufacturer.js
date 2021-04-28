const {DataTypes} = require('sequelize');
const connect =require('../configdb.js');
const mfg=connect.define('mfg',{
	mfg_id:{
		type:DataTypes.INTEGER,
		primarykey:true,

	},
	mfg_name:{
		type:DataTypes.STRING,
		allowNull:false
	},
	country:{
		type:DataTypes.STRING,
		allowNull:false
	},
	state:{
		type:DataTypes.STRING,
		allowNull:false
	},
	phone:{
		type:DataTypes.INTEGER,
		allowNull:false,
	},
	pincode:{
		type:DataTypes.INTEGER,
		allowNull:false
	}
	}
		);
module.exports={mfg};