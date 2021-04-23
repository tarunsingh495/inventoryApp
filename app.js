const express=require('express');
const {item}=require('./models/items.js');
const {mfg}=require('./models/manufacturer.js');
const {items_mfg}=require('./models/ref.js');
const connect =require('./configdb.js');
var path = require('path');
const app=express();

app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'hbs') 
app.set('views',path.join(__dirname, 'views'));
const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];
app.get("/",(req,res)=>{
	res.render("index");
});



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