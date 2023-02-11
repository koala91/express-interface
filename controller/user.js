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
    //
    res.send('register')
  } catch (error) {
    next(error)
  }
}

// 获取当前登录用户
exports.getCurrentUser = async (req, res, next) =>{
  try {
    //
    JSON.parse('aaa')

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