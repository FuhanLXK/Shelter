const mongoose = require('/Users/apple_fuhan/Desktop/github/Shelter/server/Connection.js')
// console.log(mongoose)
const User = mongoose.model('user',{
	username:String,
	password:String,
	isLogin:Boolean
})

//查询
const findUser = (userInfo, callback) => {
	User.findOne(userInfo).then((res) => {
		callback(res)
	})
}

//新增
const saveAddUser = (userInfo, callback) => {
	let newUser = new User({
		username:userInfo.username,
		password:userInfo.password
	})
	newUser.save()
}
// var newUser = new User({
// 	username:'cangji',
// 	password:'123456'
// })

// newUser.save()

module.exports = {
	findUser,
	saveAddUser
}