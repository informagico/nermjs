const express = require('express')

const auth = require('../middleware/authentication')

const router = new express.Router()

router.get('/template-path', auth, async (req, res) => {
	res.sendStatus(200)
})

module.exports = router
