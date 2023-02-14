const { User } = require('../model')
// 用户登录
exports.login = async (req, res, next) => {
  try {
    //
    res.send('login')
  } catch (error) {
    next(error)
  }
}

// 用户注册
exports.register = async (req, res, next) =>{
  try {
    // 1. 获取请求体数据
    console.log('请求体', req.body);
    // 2.数据验证
    // 3.验证通过
    let user = new User(req.body.user)
    await user.save()

    // 返回不带密码
    user = user.toJSON()
    delete user.password
    // 保持到数据库
    // 4.发送响应成功
    // res.send('register')
    console.log('user', user);
    res.status(201).json({
      user
    })
  } catch (error) {
    next(error)
  }
}

// 获取当前登录用户
exports.getCurrentUser = async (req, res, next) =>{
  try {
    //
    // JSON.parse('aaa')

    res.send('getCurrentUser')
  } catch (error) {
    next(error)
  }
}

// 更新当前登录用户
exports.updateCurrentUser = async (req, res, next) =>{
  try {
    //
    res.send('updateCurrentUser')
  } catch (error) {
    next(error)
  }
}