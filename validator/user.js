const { body } = require('express-validator');
const validate = require('../middleware/validate')
const { User } = require('../model')

// https://express-validator.github.io/docs/
exports.register = validate([
   // 配置验证规则
   body('user.username')
   .notEmpty().withMessage('用户名不能为空')
   .bail()
   .custom(async (username) => {
     const user = await User.findOne({ username });
     if (user) {
       return Promise.reject("用户名已存在");
     }
   }),

   body('user.password').notEmpty().withMessage('密码不能为空'),

   body('user.email')
   .notEmpty().withMessage('邮箱不能为快')
   .isEmail().withMessage('邮箱格式不正确')
   .bail()
   .custom(async (email) => {
     const user = await User.findOne({ email })
     if (user) {
       return Promise.reject("邮箱已经存在")
     }
   })
])