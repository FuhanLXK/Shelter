const mongoose = require('/Users/apple_fuhan/Desktop/github/Shelter/server/Connection.js')
// console.log(mongoose)
const User = mongoose.model('user',{
	username:String,
	password:String,
	isLogin:Boolean
})

const findUser = (userInfo, callback) => {
	User.findOne(userInfo).then((res) => {
		callback(res)
	})
}

module.exports = {
	findUser
}