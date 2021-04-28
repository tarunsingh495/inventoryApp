const {mfg}=require('../models/manufacturer.js');
const {DataTypes} = require('sequelize');
const connect =require('../configdb.js');

const insert=async()=>{
	try{
await mfg.bulkCreate([
  {mfg_id:6969,mfg_name:'Aggarwal',country:'Netherlands',state:'Denmark',phone:'96508281',pincode:'110056'},
  {mfg_id:1010,mfg_name:'Jamwal',country:'India',state:'Delhi',phone:'84824884',pincode:'210016'},
  {mfg_id:1000,mfg_name:'Singh',country:'Australia',state:'Sydeny',phone:'961531454',pincode:'81046'},
  {mfg_id:1333,mfg_name:'Parmar',country:'Pakistan',state:'Lahore',phone:'96508281',pincode:'115586'},
])
	}catch(err){
		console.log(err);
	}
}
	const display=async()=>{
		try{
			const file=await mfg.findAll()
			
		}
	}
insert()