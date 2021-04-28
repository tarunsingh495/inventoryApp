const items=require("../models/items").item;



 items.findAll().then((items)=>{
 	messages=items;
 }).catch((err)=>{
 	console.log(err);
 });


exports.displayitems = function(req, res) {
    res.render('index',{messages});
};
