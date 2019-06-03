var express = require('express')

var router = express.Router()


var userController = require('./user/userApi')

console.log(userController)

router.post('/login', userController.login)

module.exports = router