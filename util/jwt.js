const jwt = require('jsonwebtoken')
const { promisify } = require('util')

exports.sign = promisify(jwt.sign)

exports.verify = promisify(jwt.verify)

// JWT
// 头部、负载、签名
// BASE64URL算法

// Authorization: Bearer <token>
// 缺点：使用过程中无法废弃某个token

// JWT 解决方案
// https://jwt.io/


// Node中使用JWT
// https://github.com/auth0/node-jsonwebtoken

// 测试开始

// const jwt = require('jsonwebtoken')

// // 生成jwt
// const token = jwt.sign({
//   foo: 'bar'
// }, 'test', (err, token) => {
//   if (err) {
//     return console.log('生成token失败');
//   }
//   console.log(token);
// })


// // 验证jwt
// const ret = jwt.verify(
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NzY0Nzk2Mzh9.wE98YZJ5sV_171D4krDo1lWTdKxUR690AJqo24XunKU',
//   'test',
//   (err, ret) => {
//     if (err) {
//       return console.log('token 认证失败');
//     }
//     console.log('ret', ret);
//   }
// )

// 测试结束