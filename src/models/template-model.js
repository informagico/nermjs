const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const templateSchema = new mongoose.Schema(
	{
		field: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
)

templateSchema.statics.yourMethodHere = async () => {
	return undefined
}

const Template = mongoose.model('Template', templateSchema)

module.exports = Template
