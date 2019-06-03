const userModel = require('./user')

const login  = (req, res) => {

	console.log(req.body)
  let {username, password,status} = req.body
  // let username = 'test'

  // let password = '123456'
  userModel.findUser({username}, (user) => {
    if (!user) {
      res.json({
        code: 200,
        msg: '用户名不存在'
      })
    } else {
      if (user.password == password) {
        res.cookie('user', username)
        res.json({
          code: 200,
          msg: '登录成功！'
        })
      } else {
        res.json({
          code: 200,
          msg: '密码错误'
        })
      }
    }
  })
}

module.exports = {
	login
}