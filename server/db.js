const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://tinsson:Dai1225,@ds129013.mlab.com:29013/tinsson_test');

const db = mongoose.connection;
db.once('error',()=>console.log("connect error"));
db.once('open',()=>console.log("connnet success"));

//定义模式
const accessSchema = mongoose.Schema({
  access: String
});

//定义模型
const Models = {
  subAc: mongoose.model('details',accessSchema)
}

module.exports = Models;
