const express = require('express');
const articleCtrl = require('../controller/article')
const auth = require('../middleware/auth')
const articleValidator = require('../validator/article')


const router = express.Router()

// 获取文章列表
router.get('/', articleCtrl.getArticles)

// 获取用户关注的作者文章列表
router.get('/feed', articleCtrl.getFeedArticles)


// 获取文章
router.get('/:sulg', articleCtrl.getArticle)


// 创建文章
router.post('/', auth, articleValidator.createArticle, articleCtrl.createArticle)


// 更新文章
router.put('/:sulg', articleCtrl.updateArticle)


// 删除文章
router.delete('/:sulg', articleCtrl.deleteArticle)


// 添加文章评论
router.post('/:sulg/comments', articleCtrl.createArticleComment)


// 获取文章评论列表
router.get('/:sulg/comments', articleCtrl.getArticleComments)


//  删除文章评论
router.delete('/:sulg/comments/:id', articleCtrl.deleteArticleComment)

module.exports = router
