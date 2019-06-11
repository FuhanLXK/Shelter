const userModel = require('./user')

const login  = (req, res) => {

	console.log(req.body)
  let {username, password,status} = req.body
  // let username = 'test'

  // let password = '123456'
  userModel.findUser({username}, (user) => {
    if (!user) {
      res.json({
        code: 201,
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
          code: 202,
          msg: '密码错误'
        })
      }
    }
  })
}

const register  = (req, res) => {
  let {username, password,status} = req.body

  userModel.findUser({username}, (user) => {
    if(user == null){
      userModel.saveAddUser(req.body, (user) => {
      })
      res.json({
        code:200,
        msg:'用户创建成功',
        data:{
          username:req.body.username
        }
      })
    }else if(user.username == username){
      res.json({
        code:201,
        msg:'用户已存在'
      })
    }
  })
}

module.exports = {
	login,
  register
}