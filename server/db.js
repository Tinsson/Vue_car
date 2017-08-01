const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/vuecar',{useMongoClient:true});

const db = mongoose.connection;
db.once('error',(err)=>console.log("connect error:"+err));
db.once('open',()=>console.log("db connnet success"));

//定义模式
const accessSchema = mongoose.Schema({
  access: {type:String},
  user_id: {type:Number},
  time: {type: Date,default: Date.now}
});

//定义模型 第一个参数是建立一个document
const Models = {
  subAc: db.model('details',accessSchema)
};

module.exports = Models;
