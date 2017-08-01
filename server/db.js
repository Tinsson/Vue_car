const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/vuecar',{useMongoClient:true});

const db = mongoose.connection;
db.once('error',(err)=>console.log("connect error:"+err));
db.once('open',()=>console.log("db connnet success"));

//定义模式
const detailsSchema = mongoose.Schema({
  access: {type:String,default: ''},
  user_id: {type:Number},
  username: {type: String},
  mobile: {type: Number},
  password: {type: String},
  logintime: {type: Date,default: Date.now}
});

const materialSchema = mongoose.Schema({
  m_id: {type: Number},
  name: {type:String},
  sku: {type:Number}
});

const businessSchema = mongoose.Schema({
  b_id: {type: Number},
  area: {type: String},
  name: {type:String},
  address: {type:String},
  telephone: {type: Number}
});

const serviceSchema = mongoose.Schema({
  s_id: {type: Number},
  s_type: {type: String},
  name: {type: String}
});


//定义模型 第一个参数是建立一个document
const Models = {
  details: db.model('details',detailsSchema),
  material: db.model('material',materialSchema),
  business: db.model('business',businessSchema),
  service: db.model('service', serviceSchema)
};

module.exports = Models;
