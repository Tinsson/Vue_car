'use strict';
const express = require('express');
const models = require('./db');
const router = express.Router();
const crypto = require('crypto');


router.post('/api/access',(req,res)=>{
  let newAccess = new models.details({
    access: req.body.access,
    user_id: req.body.user_id
  });
  newAccess.save((err,data)=>{
    if(err){
      let result = {
        status: 1,
        msg: err
      };
      res.send(result);
    }else{
      let result = {
        status: 1,
        msg: 'create success'
      };
      res.send(data);
    }
  });
});

router.post('/api/getAccess',(req,res)=>{
  let user_id = req.body.user_id;
  models.details.find({user_id:30},["user_id","access","time"],function(err,result){
    if(err){
      res.send(err);
    }else{
      res.send(result);
    }
  })
});

router.post('/api/updateAcc',(req,res)=>{
  let access = req.body.access;
  models.details.update({access: access},{user_id: 20},(err,result)=>{
    if(err){
      res.send(err);
    }else{
      res.send(result);
    }
  })
});

module.exports = router;
