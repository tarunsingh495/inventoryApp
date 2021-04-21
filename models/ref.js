const {item}=require('./items.js');
const {mfg}=require('./manufacturer.js');
const {Sequelize,DataTypes} = require('sequelize');
const connect =require('../configdb.js');

const mfg_items = connect.define('mfg_items', {
  mfg_id: {
    type: DataTypes.INTEGER,
    references: {
      model: mfg, // 'Movies' would also work
      key: 'mfg_id'
    }
  },
  item_id: {
    type: DataTypes.INTEGER,
    references: {
      model: item, // 'Actors' would also work
      key: 'item_id'
    }
  }
});
mfg.belongsToMany(item, { through: mfg_items,foreignKey:'mfg_id' });
item.belongsToMany(mfg, { through: mfg_items ,foreignKey:'item_id' });
(async ()=>{
  try {await connect.sync();
  console.log("All Tables have been synced");}
  catch(err){
    console.log(err);
  }
})();
module.exports=mfg_items;