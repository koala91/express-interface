const mongoose = require('mongoose')
const baseModel = require('./baseModel')
const md5 = require('../util/md5')


const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true,
		set: value => md5(value),
		select: false // 返回的user不带密码
	},
	bio: {
		type: String,
		default: null
	},
	image: {
		type: String,
		default: null
	},
	...baseModel
})


module.exports = userSchema
