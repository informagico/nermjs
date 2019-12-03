'use strict'

require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
	console.log('Hello World!')

	res.sendStatus(200)
})

app.listen(process.env.PORT || 3000, () => {
	console.log(`Example app listening on port ${process.env.PORT}!`)
})
