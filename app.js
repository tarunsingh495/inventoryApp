const express=require('express');
const {item}=require('./models/items.js');
const {mfg}=require('./models/manufacturer.js');
const {items_mfg}=require('./models/ref.js');
const connect =require('./configdb.js');
var path = require('path');
const app=express();
const indexRouter=require('./routes/indexRouter.js');

//settting up my view engine
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'hbs') 
//declaring path to css/js
app.set('views',path.join(__dirname, 'views'));
//sample message
app.use('/',indexRouter);




(async ()=>{
	try {await connect.sync({alter:true});
	console.log("All Tables have been synced");}

	catch(err){
		console.log(err);
	}
})();






app.listen(3333,()=>{
	console.log("http://localhost:3333");
})