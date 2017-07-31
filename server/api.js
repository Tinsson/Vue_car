'use strict'
const express = require('express');
const models = require('./db');
const router = express.Router();


router.post('/api/access',(req,res)=>{
  let newAccess = new models.subAc({
    access: req.body.access
  });
  newAccess.save((err,data)=>{
    if(err){
      res.send(err);
    }else{
      res.send("creat success");
    }
  });
});

module.exports = router;
