const {item}=require('../models/items.js');
const {DataTypes} = require('sequelize');
const connect =require('../configdb.js');

const insert=async()=>{
	try{
await item.bulkCreate([
{item_id :1234,item_type:'Shirt',item_name:'Hero’s Sacrifice (Glow in Dark)',manf_id:'6969',cost:"5353",color:"black",quantity:"127"},
{item_id :1381,item_type:'t-shirt',item_name:'Humans are so interesting (Glow In Dark)',manf_id:'38',cost:"533",color:"blue",quantity:"12"},
{item_id :568,item_type:'underwear',item_name:'Hentai with Senpai (Half Sleeves)',manf_id:'69',cost:"100",color:"white",quantity:"1"},
{item_id :11556,item_type:'skirt',item_name:'Thunderclap Flash',manf_id:'54',cost:"300",color:"pink",quantity:"1"},
])
	}catch(err){
		console.log(err);
	}
}
insert()

