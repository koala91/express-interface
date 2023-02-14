const mongoose = require('mongoose')
const baseModel = require('./baseModel')

const articleSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	tagList: {
		type: [String],
		default: null
	},
	...baseModel
})

module.exports = articleSchema