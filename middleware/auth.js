const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')

module.exports = async (req, res, next) => {
  // 从请求头获取 token 数据
  let token = req.headers['authorization']
  token = token ? token.split('Bearer ')[1] : null

  if (!token) {
    return res.status(401).end()
  }

  try {
    const decodeToken = await verify(token, jwtSecret)
    req.user = await User.findById(decodeToken.userId)
    next()
    console.log('decodeToken', decodeToken);
    next()
  } catch (error) {
    return res.status(401).end()
  }
  // 验证 token 是否有效
  // 无效 => 响应 401 状态码
  // 有效 => 吧用户信息读取出来挂载到req请求对象上继续往后执行
}