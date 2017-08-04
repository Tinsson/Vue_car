const api = require('./api');
const login = require('./login');
const fs = require('fs');
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser('tinsson'));
app.use(session({
  secret: 'tinsson',
  cookie: {maxAge: 60000},
  resave: false,
  saveUninitialized: true
}));
app.use(api);
app.use(login);
app.use(express.static(path.resolve(__dirname, '../dist')));
app.get('*',function(req,res){
    const html = fs.readFileSync(path.resolve(__dirname,'../dist/index.html'),'utf-8');
    res.send(html)
});

app.listen(8088);
