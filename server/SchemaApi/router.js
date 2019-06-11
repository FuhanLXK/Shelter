var express = require('express')

var router = express.Router()


var userController = require('./user/userApi')

console.log(userController)

router.post('/login', userController.login)

router.post('/register', userController.register)

module.exports = router