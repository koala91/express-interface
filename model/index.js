const mongoose = require('mongoose');
const { dbUrl } = require("../config/config.default")

mongoose.connect(dbUrl);

const db = mongoose.connection;
mongoose.set('strictQuery', true);

db.on('error', (err) => {
    console.log('数据库连接失败', err);
});

db.once('open', () => {
    console.log('数据库连接成功');
});

// 组织导出模型类
module.exports = {
    User: mongoose.model('User', require('./user')),
    Article: mongoose.model('Article', require('./article')),

}

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: '张三' });
// kitty.save().then(() => console.log('张三'));