const express = require('express');
const models = require('./db');
const router = express.Router();
const crypto = require('crypto');

router.post('/login/checkIn',function(req, res){
  let loginInfo = {
    mobile: req.body.mobile,
    password: req.body.password
  };
  models.details.find(loginInfo,function(err,result){
    if(err){
      console.log(err);
    }else{
      if(result.length == 0){
        let data = {
          status : 0,
          msg: '无此登录信息！'
        };
        res.send(data);
      }else{
        let data = {
          status: 1,
          info: result
        };
        res.send(data);
      }
    }
  })
});

router.post('/login/register',function(req,res){
  let register = {
    mobile: req.body.mobile,
    password: req.body.password
  };
  models.details.find({mobile: req.body.mobile},function(err,result){
    if(err){
      console.log(err);
    }else{
      if(result.length > 0){
        let data = {
          status: 0,
          msg: '该手机已经注册，请前往登录'
        };
        res.send(data);
      }
    }
  });
  models.details.save(register,function(err,result){
    if(err){
      res.send(err);
    }else{
      res.send(result);
    }
  })
});

module.exports = router;
