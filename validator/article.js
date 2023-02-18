const { body, param } = require('express-validator');
const { mongoose } = require('mongoose');
const validate = require('../middleware/validate')
const { Article } = require('../model');



exports.createArticle = validate([
  body('article.title').notEmpty().withMessage('文章标题不能为空'),
  body('article.description').notEmpty().withMessage('文章摘要不能为空'),
  body('article.body').notEmpty().withMessage('文章内容不能为空')
])

exports.getArticle = validate([
  param('articleId').custom(async (value) => {
    if (!mongoose.isValidObjectId(value)) {
      return Promise.reject("文章ID错误")
    }
  })
])

// 校验文章id是否是ObjectId
// id是否存在
// 校验文章作者是否是当前登录用户
exports.updateArticle = [
  validate([
    validate.isValidObjectId(['params'], 'articleId')
  ]),
  async (req, res, next) => {
    const articleId = req.params.articleId
    console.log('articleId', articleId);
    const article = await Article.findById(articleId)
    req.article = article
    console.log('article', article);
    if (!article) {
      return res.status(404).end()
    }
    next()
  },
  async (req, res, next) => {
    console.log('req.user._id', req.user._id);
    console.log('article.author', req.article.author);
    if (String(req.user._id) !== String(req.article.author)) {
      return res.status(403).end()
    }
    next()
  }
]


exports.deleteArticle =exports.updateArticle


