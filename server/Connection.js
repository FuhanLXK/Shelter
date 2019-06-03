var mongoose = require('mongoose')

var mongooseUrl = 'mongodb://127.0.0.1:27017/nextHuafo'

/**** 链接 *****/
mongoose.connect(mongooseUrl, {useNewUrlParser: true}, (err) => {
  if(err){
    console.log('Connection Error:' + err)
  }else{
    console.log('Connection success!') }
})

/******链接成功*******/
mongoose.connection.on('connected',()=>{
	console.log('数据库连接成功')
	// console.log(mongoose)
})

/******链接失败*******/
mongoose.connection.on('err',()=>{
	console.log('数据库连接失败')
})

module.exports = mongoose
// console.log(÷)