const express = require('express')

const router = express.Router()

const user = require('./user')
const profile = require('./profile')

// 用户相关路由
router.use(user)

// 用户资料相关路由
router.use('/profile', profile)

// 文章相关路由
// router.use('/articles', articles)

// 标签相关路由
// router.use('/tags', tags)



module.exports = router