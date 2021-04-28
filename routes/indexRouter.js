var express = require('express');
var router = express.Router();

//import all controller
var itemController = require('../controllers/itemController');
const mfgController=require('../controllers/mfgController');

router.get('/', itemController.displayitems);

router.get('/mfg',mfgController.displaymfg);
module.exports = router;