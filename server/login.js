'use strict';
const express = require('express');
const models = require('./db');
const router = express.Router();
const crypto = require('crypto');


function randCode(num){
  let arr = [];
  for(let i = 0;i < num;i++){
    arr.push(parseInt(Math.random()*10));
  }
  return arr.join('');
}

router.post('/login/checkIn', (req, res)=>{
  let password = md5.update(req.body.password).digest('base64');
  let loginInfo = {
    mobile: req.body.mobile,
    password: password
  };
  models.details.find(loginInfo,function(err,result){
    if(err){
      console.log(err);
    }else{
      if(result.length === 0){
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

router.post('/login/register',(req,res)=>{
  let md5 = crypto.createHash('md5');
  let password = md5.update(req.body.password.toString()).digest('base64');
  let register = {
    mobile: req.body.mobile,
    password: password
  };
  let systemErr = {
    status: 0,
    msg: "系统繁忙"
  };
  let successInfo = {
    status: 1,
    msg: '注册成功'
  };
  models.user.find({mobile: req.body.mobile},function(err,result){
    if(err){
      res.send(systemErr);
    }else{
      if(result.length > 0){
        let data = {
          status: 0,
          msg: '该手机已经注册，请前往登录！'
        };
        res.send(data);
      }else{
        let userData = new models.user(register);
        userData.save((err,result)=>{
          if(err){
            res.send(systemErr);
          }else{
            res.send(successInfo);
          }
        })
      }
    }
  });
});

router.post('/login/codeProof',(req,res)=>{
  let code = req.body.proof;
  res.send(req.session.code === code);
});

router.post('/login/proof',(req,res)=>{
  let mobile = req.body.mobile;
  let code = randCode(6);
  req.session.mobile = mobile;
  req.session.code = code;
  let info = {
    status: 1,
    code: req.session.code
  };
  res.send(info);
});


module.exports = router;
