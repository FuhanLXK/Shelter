var express = require('express')

var router = express.Router()


var userController = require('./user/userApi')

var articleController = require('./article/articleApi')

console.log(userController)

router.post('/login', userController.login)

router.post('/register', userController.register)

router.post('/article', articleController.findCount)

router.post('/deleteArticle', articleController.deleteCount)

router.post('/uploadArticle', articleController.uploadArticle)

module.exports = router