const express = require('express')
const mogran = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandle = require('./middleware/error-handle')
require('./model')

const app = express()

app.use(mogran('dev'))

app.use(express.json())

app.use(cors())

const PORT = process.env.PORT || 3000

// 挂载路由
app.use('/api', router);

// 挂载统一处理服务器错误中间件
app.use(errorHandle())

app.listen(PORT, () => {
  console.log(`服务跑在 http://localhost:${PORT}`);
})