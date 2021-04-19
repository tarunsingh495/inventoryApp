const express=require('express');
const connect =require('./configdb.js');

const item=require('./models/items.js');
const mfg=require('./models/manufacturer.js');
const app=express();
app.get("/",(req,res)=>{
	app.send("INdex page");
});

(async ()=>{
	try {await connect.sync();
	console.log("All Tables have been synced");}
	catch(err){
		console.log(err);
	}
})();






app.listen(3333,()=>{
	console.log("http://localhost:3333");
})