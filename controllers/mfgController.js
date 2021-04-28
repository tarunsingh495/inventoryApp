const mfg=require("../models/manufacturer").mfg;



 mfg.findAll().then((items)=>{
 	mfgDetails=items;
 	console.log(mfgDetails)
 }).catch((err)=>{
 	console.log(err);
 });


exports.displaymfg = function(req, res) {
    res.render('manufacturerDetails',{mfgDetails});
};


