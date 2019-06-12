const mongoose = require('/Users/apple_fuhan/Desktop/github/Shelter/server/Connection.js')

const Article = mongoose.model('article',{
	id: String,
	title: String,
	contet: String,
	tit_user: String
})


//查询
const findOneCount = (userInfo ,callback) => {
	Article.find().then((res) => {
		callback(res)
	})
}


//删除
const deleteCountData = (userInfo ,callback) => {
	Article.findOne(userInfo).deleteMany(userInfo).then((res) => {
		callback(res)
	})
}


//修改数据
const uploadArticleData = (userInfo ,callback) => {
	Article.update({ "id" : userInfo.id }, { $set: userInfo }).then((res) => {
		callback(res)
	})
}
module.exports = {
	findOneCount,
	deleteCountData,
	uploadArticleData
}