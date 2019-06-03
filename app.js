var express = require('express');

var app = express()

var mongoose = require('mongoose');

const bodyPaser = require('body-parser');

// app.use(bodyPaser.json)   //在其他路由中间件前（尽可能靠前，以能够通过bodyPaser获取req.body）

// app.use(bodyPaser.urlencoded({ extended: false}))
app.use(bodyPaser.urlencoded({extended:true}));

app.get('/',function(req,res){
  res.send("启动成功")

})


var usersRouter = require('./server/SchemaApi/router')

app.use('/api/user',usersRouter)

app.listen(3030,() => {
  console.log("node 3030端口成功")
})