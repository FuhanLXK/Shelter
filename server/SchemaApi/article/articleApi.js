const articleModel = require('./article')

//查询全部数据
const findCount = (req,res) => {
	articleModel.findOneCount({} ,(user) => {
		res.json(user)
	})
	// console.log(res)
}

//删除文档
const deleteCount = (req,res) => {
	articleModel.deleteCountData(req.body ,(user) => {
		console.log(user)
	})
}

//修改文档
const uploadArticle = (req,res) => {
	articleModel.uploadArticleData(req.body ,(user) => {
		if(user.n == 1){
			res.json({
				code:200,
				msg:"修改成功"
			})
		}
	})
}
//删除提交的数据
module.exports = {
	findCount,
	deleteCount,
	uploadArticle
}