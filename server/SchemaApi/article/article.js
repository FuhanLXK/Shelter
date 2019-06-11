const mongoose = require('/Users/apple_fuhan/Desktop/github/Shelter/server/Connection.js')

const Article = mongoose.model('article',{
	id: String,
	title: String,
	contet: String,
	tit_user: String
})

