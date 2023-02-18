const { Article } = require('../model')


// 获取文章列表
exports.getArticles = async (req, res, next) => {
  try {
    const {limit = 5, offset = 0, tag } = req.query
    const filter = {}
    if (tag) {
      filter.tagList = tag
    }


    const articles = await Article.find(filter)
                                  .skip(Number(offset)) // 跳过多少条
                                  .limit(Number(limit)) // 取多少条
    
    const articleCount = await Article.countDocuments()
    res.status(200).json({
      articles,
      articleCount
    })
  } catch (error) {
    
  }
}

// 获取用户关注的作者文章列表
exports.getFeedArticles = async (req, res, next) => {
  
}

// 获取文章
exports.getArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.articleId).populate('author')
    if (!article) {
      return res.status(404).json({
        error: "文章不存在"
      })
    }
    
    res.status(200).json({
      article
    })
  } catch (error) {
    next(error)
  }
}

// 创建文章
exports.createArticle = async (req, res, next) => {
  try {
    const article = new Article(req.body.article)
    article.author = req.user._id
    //   报错了(4x和6x语法不一致)
    // article.populate('author').execPopulate()
    // 正确
    article.populate('author')
    // article.populate('author', ['username', 'bio', 'image', 'following'])

    await article.save()
    res.status(200).json({
			article
		})
  } catch (error) {
   next(error) 
  }
}

// 更新文章
exports.updateArticle = async (req, res, next) => {
  
}

// 删除文章
exports.deleteArticle = async (req, res, next) => {
  
}

// 添加文章评论
exports.createArticleComment = async (req, res, next) => {
  
}

// 获取文章评论列表
exports.getArticleComments = async (req, res, next) => {
  
}

// 删除文章评论
exports.deleteArticleComment = async (req, res, next) => {
  
}