'use strict'

const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
	try {
		const token = req.header('Authorization').replace('Bearer ', '')

		jwt.verify(token, process.env.JWT_TOKEN_SECRET)

		req.token = token
		next()
	} catch (e) {
		res.status(401).send({ error: 'Please authenticate.' })
	}
}

module.exports = auth
