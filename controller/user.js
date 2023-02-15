const { User } = require('../model')
const jwt  = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

// 用户登录
exports.login = async (req, res, next) => {
  try {
    // 1. 数据验证
    // 2.生成token
    const user = req.user.toJSON()
    const token = await jwt.sign({
      userId: user._id
    }, jwtSecret, {
      expiresIn: 60 * 60 * 24
    })
    console.log('-----', user);
    // 3.发送成功相应（包含token的用户信息）
    delete user.password
    res.status(200).json({
      ...user,
      token
    })
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
    console.log(req.headers);
    res.status(299).json({
      user: req.user
    })
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